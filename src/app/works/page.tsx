"use client";

import Script from "next/script";
import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-900">

      {/* model-viewer script */}
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />

      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Works</h1>
        <p className="text-gray-500">
          A showcase of immersive 3D experiences, product animations, and AR integrations.
        </p>
      </section>

      {/* 3D MODELS */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Interactive 3D Models</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* MODEL 1 */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <model-viewer
                  src="/models/PEACOCK-BLENDER.glb"
                  auto-rotate
                  camera-controls
                  ar
                  shadow-intensity="1"
                  style="width:100%; height:400px;"
                ></model-viewer>
              `,
            }}
          />

          {/* MODEL 2 */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <model-viewer
                  src="/models/SMALLBLENDER101.glb"
                  auto-rotate
                  camera-controls
                  ar
                  shadow-intensity="1"
                  style="width:100%; height:400px;"
                ></model-viewer>
              `,
            }}
          />

        </div>
      </section>

      {/* BACK BUTTON */}
      <div className="text-center mt-10">
        <Link href="/" className="text-red-600 hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>

    </main>
  );
}