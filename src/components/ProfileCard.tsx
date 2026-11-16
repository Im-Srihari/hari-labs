
'use client';

import { useRef, useEffect } from 'react';

interface ProfileCardProps {
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    statusColor?: string;
    contactText?: string;
    holo?: number;
    glare?: number;
    tiltStrength?: number;
    parallax?: number;
    radius?: number;
    enableTilt?: boolean;
    intro?: boolean;
    showUserInfo?: boolean;
    enableMobileTilt?: boolean;
    theme?: 'dark' | 'light';
    onContactClick?: () => void;
    email?: string;
    avatarUrl?: string;
}

export default function ProfileCard({
    name = 'Srihari K S',
    title = 'Co-Founder, Hari Labs',
    handle = 'hari-labs',
    status = 'Building Hari Labs',
    statusColor = '#2dd4bf',
    contactText = 'Contact me',
    avatarUrl = '/images/srihari_photo.jpeg',
    email = 'srihariks1004@gmail.com',
    holo = 0.8,
    glare = 0.5,
    tiltStrength = 12,
    parallax = 4,
    radius = 20,
    enableTilt = true,
    intro = true,
    showUserInfo = true,
    enableMobileTilt = false,
    theme = 'dark',
    onContactClick,
}: ProfileCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const introPlayed = useRef(false);

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!enableTilt || !cardRef.current) return;

        if (event.pointerType === 'touch' && !enableMobileTilt) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateX = (0.5 - y) * tiltStrength * 2;
        const rotateY = (x - 0.5) * tiltStrength * 2;

        if (frameRef.current !== null) {
            cancelAnimationFrame(frameRef.current);
        }

        frameRef.current = requestAnimationFrame(() => {
            card.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            card.style.setProperty('--mouse-x', `${x * 100}%`);
            card.style.setProperty('--mouse-y', `${y * 100}%`);

            card.style.setProperty('--shift-x', `${(x - 0.5) * parallax}px`);
            card.style.setProperty('--shift-y', `${(y - 0.5) * parallax}px`);

            card.style.setProperty('--card-active', '1');
        });
    };

    const resetCard = () => {
        const card = cardRef.current;
        if (!card) return;

        if (frameRef.current !== null) {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }

        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
        card.style.setProperty('--shift-x', '0px');
        card.style.setProperty('--shift-y', '0px');
        card.style.setProperty('--card-active', '0');
    };

    useEffect(() => {
        const card = cardRef.current;
        if (!card || !intro || introPlayed.current) return;

        introPlayed.current = true;

        const timer = window.setTimeout(() => {
            card.style.transform = 'rotateX(-5deg) rotateY(7deg)';
            card.style.setProperty('--mouse-x', '75%');
            card.style.setProperty('--mouse-y', '25%');
            card.style.setProperty('--card-active', '1');

            window.setTimeout(() => {
                if (cardRef.current) resetCard();
            }, 900);
        }, 500);

        return () => window.clearTimeout(timer);
    }, [intro]);

    useEffect(() => {
        return () => {
            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleContact = async () => {
        if (!email) return;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = email;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';

                document.body.appendChild(textarea);
                textarea.select();

                const copied = document.execCommand('copy');
                document.body.removeChild(textarea);

                if (!copied) {
                    throw new Error('Copy command failed');
                }
            }

            alert(`Email copied: ${email}`);
        } catch (error) {
            console.error('Failed to copy email:', error);
            alert(`Please copy this email manually: ${email}`);
        }
    };

    const isLight = theme === 'light';

    return (
        <div className="flex justify-center items-center py-10">
            <div
                className="relative w-full max-w-[340px] min-w-0"
                style={{ perspective: '1000px' }}
                onPointerMove={handlePointerMove}
                onPointerLeave={resetCard}
            >
                <div
                    ref={cardRef}
                    className="relative p-[10px] border shadow-2xl will-change-transform transition-transform duration-200 ease-out"
                    style={{
                        borderRadius: `${radius + 10}px`,
                        background: isLight ? '#f0f0f3' : '#27242f',
                        borderColor: isLight
                            ? 'rgba(0,0,0,0.1)'
                            : 'rgba(255,255,255,0.1)',
                        transform: 'rotateX(0deg) rotateY(0deg)',
                        transformStyle: 'preserve-3d',
                        ['--mouse-x' as string]: '50%',
                        ['--mouse-y' as string]: '50%',
                        ['--shift-x' as string]: '0px',
                        ['--shift-y' as string]: '0px',
                        ['--card-active' as string]: '0',
                    }}
                >
                    {/* Profile image */}
                    <div
                        className="relative aspect-[4/5] overflow-hidden bg-[#34303d]"
                        style={{ borderRadius: `${radius}px` }}
                    >
                        <img
                            src={avatarUrl}
                            alt={name}
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-200"
                            style={{
                                transform:
                                    'translate3d(var(--shift-x), var(--shift-y), 0)',
                            }}
                            draggable={false}
                        />

                        {/* Bottom gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                        {/* Holographic glare */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                opacity: `calc(var(--card-active) * ${holo})`,
                                background: `
                                    radial-gradient(
                                        circle at var(--mouse-x) var(--mouse-y),
                                        rgba(255,255,255,${glare}),
                                        rgba(45,212,191,0.2) 25%,
                                        transparent 70%
                                    )
                                `,
                                mixBlendMode: 'screen',
                            }}
                        />

                        {/* Holographic rainbow reflection */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                opacity: `calc(var(--card-active) * ${holo * 0.45})`,
                                background:
                                    'linear-gradient(125deg, transparent 10%, rgba(255,80,130,0.3) 25%, rgba(70,220,255,0.3) 45%, rgba(190,100,255,0.3) 65%, transparent 85%)',
                                backgroundSize: '200% 200%',
                                backgroundPosition:
                                    'var(--mouse-x) var(--mouse-y)',
                                mixBlendMode: 'color-dodge',
                            }}
                        />

                        {/* Name and title */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h2 className="text-2xl font-bold tracking-tight">
                                {name}
                            </h2>
                            <p className="mt-1 text-sm text-white/80">
                                {title}
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    {showUserInfo && (
                        <div className="flex items-center gap-3 px-4 py-3">
                            <div className="flex-1 min-w-0">
                                <p
                                    className={`text-sm font-semibold truncate ${isLight ? 'text-gray-900' : 'text-white'
                                        }`}
                                >
                                    @{handle}
                                </p>

                                <p
                                    className={`flex items-center gap-2 text-xs mt-1 ${isLight ? 'text-gray-600' : 'text-gray-400'
                                        }`}
                                >
                                    <span
                                        className="w-2 h-2 rounded-full"
                                        style={{ background: statusColor }}
                                    />
                                    {status}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleContact}
                                className={`rounded-xl px-4 py-2.5 text-sm font-semibold border transition-colors ${isLight
                                    ? 'text-gray-900 bg-black/5 border-black/10 hover:bg-black/10'
                                    : 'text-white bg-white/10 border-white/10 hover:bg-white/20'
                                    }`}
                            >
                                ✉ {contactText}
                            </button>
                        </div>
                    )}

                    {/* Border highlight */}
                    <div
                        className="absolute inset-0 pointer-events-none border border-white/10"
                        style={{ borderRadius: `${radius + 10}px` }}
                    />
                </div>
            </div>
        </div>
    );
}
