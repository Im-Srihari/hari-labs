import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen px-6 py-10 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f9fafb, #f3f4f6)",
      }}
    >

      {/* 🔴 LIQUID GLASS BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] 
          bg-red-400/20 backdrop-blur-3xl border border-white/20 
          rounded-full blur-2xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-[250px] h-[250px] 
          bg-red-500/10 backdrop-blur-2xl border border-white/20 
          rounded-full blur-2xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[400px] h-[400px] bg-red-300/10 backdrop-blur-3xl 
          border border-white/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">

        {/* 🔥 HEADER */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <Link href="/" className="text-lg font-semibold tracking-wide text-gray-900">
              Hari Labs
            </Link>

            <nav className="flex gap-6 text-sm text-gray-700">
              <a href="#home" className="hover:text-red-600 transition">Home</a>
              <Link href="/works" className="hover:text-red-600 transition">Works</Link>
              <a href="#capabilities" className="hover:text-red-600 transition">Capabilities</a>
              <a href="#contact" className="hover:text-red-600 transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* 🔥 HERO */}
        <section id="home" className="max-w-5xl mx-auto text-center mt-24">

          {/* ✨ HOVER ANIMATION TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 flex justify-center gap-1 tracking-wider text-gray-900">
            {"HARI LABS".split("").map((char, index) => (
              <span
                key={index}
                className="
                  inline-block
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:scale-110
                  hover:text-red-600
                  hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]
                "
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Building Real-Time AI Agents for Voice, Vision, and Automation
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We design intelligent systems that listen, understand, and act in real time.
          </p>
        </section>

        {/* 🔥 WORKS PREVIEW */}
        <section className="max-w-6xl mx-auto mt-32">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* VIDEO 1 */}
            <div className="rounded-xl shadow-lg overflow-hidden border hover:scale-[1.02] transition">
              <iframe
                src="https://drive.google.com/file/d/1XOczpyFVeKmJOjKWyFhBad4xo7HZzsEF/preview"
                className="w-full h-[300px]"
                allow="autoplay"
              ></iframe>
              <div className="p-4">
                <p className="text-gray-900 font-medium">
                  Product Animation
                </p>
                <p className="text-sm text-gray-600">
                  Custom 3D product animations crafted for realistic visual presentation
                </p>
              </div>
            </div>

            {/* VIDEO 2 */}
            <div className="rounded-xl shadow-lg overflow-hidden border hover:scale-[1.02] transition">
              <iframe
                src="https://drive.google.com/file/d/1zmJSpioSKFAOSVx9KcE9smFjTOSmueoP/preview"
                className="w-full h-[300px]"
                allow="autoplay"
              ></iframe>
              <div className="p-4">
                <p className="text-gray-900 font-medium">
                  Product Animation
                </p>
                <p className="text-sm text-gray-600">
                  High-quality animated visuals built using custom 3D models
                </p>
              </div>
            </div>

            {/* VIDEO 3 */}
            <div className="rounded-xl shadow-lg overflow-hidden border md:col-span-2 hover:scale-[1.02] transition">
              <iframe
                src="https://drive.google.com/file/d/1If8Ucq1d2kkGqptSUor4XGrFdx4pKjrZ/preview"
                className="w-full h-[400px]"
                allow="autoplay"
              ></iframe>
              <div className="p-4 text-center">
                <p className="text-gray-900 font-medium">
                  Product Animation Showcase
                </p>
                <p className="text-sm text-gray-600">
                  Realistic product animation workflows developed using custom 3D assets
                </p>
              </div>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link href="/works" className="text-red-600 hover:underline font-medium">
              View Full Works →
            </Link>
          </div>
        </section>

        {/* 🔥 CAPABILITIES */}
        <section id="capabilities" className="max-w-5xl mx-auto mt-32">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">
            Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border p-6 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Voice AI Agents
              </h3>
              <p className="text-gray-600">
                Real-time conversational AI systems.
              </p>
            </div>

            <div className="border p-6 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Computer Vision
              </h3>
              <p className="text-gray-600">
                Intelligent visual systems for detection.
              </p>
            </div>

            <div className="border p-6 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                AI Automation
              </h3>
              <p className="text-gray-600">
                Automating workflows with AI.
              </p>
            </div>

            <div className="border p-6 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                3D + AI Experiences
              </h3>
              <p className="text-gray-600">
                High-fidelity 3D models of physical products generated using photogrammetry
              </p>
            </div>
          </div>
        </section>

        {/* 🔥 CONTACT */}
        <section id="contact" className="max-w-3xl mx-auto mt-32 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Let’s Work Together
          </h2>

          <p className="text-gray-600 mb-4">
            Open to collaborations and incubation opportunities.
          </p>

          <p className="font-medium text-gray-900">
            srihariks1004@gmail.com
          </p>
        </section>

      </div>
    </main>
  );
}