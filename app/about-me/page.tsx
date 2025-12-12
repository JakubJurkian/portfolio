import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="w-full max-w-[1200px] py-8 px-6 md:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="text-(--text-secondary) hover:text-accent transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to Home
        </Link>
        <h1 className="text-xl font-bold">About Me</h1>
      </header>

      <main className="w-full max-w-[1200px] px-6 md:px-12 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-10">
          <article className="bg-card border border-border-color rounded-2xl p-8 md:p-10">
            
          </article>

          {/* KEY SKILLS / TECH STACK - USING CARD STYLING */}
          <article>
            <h3 className="text-2xl font-bold mb-6 text-(--text-primary)">
              Professional Toolkit
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
            </div>
          </article>
        </section>

        {/* RIGHT COLUMN: Timeline / History (1/3 width) */}
        <section className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-6 text-(--text-primary)">
            My Journey
          </h3>
          <div className="relative border-l-2 border-border-color ml-4">
            

            {/* Final Timeline Event Placeholder */}
            <div className="mb-8 pl-6 relative">
              <div className="absolute w-4 h-4 rounded-full bg-accent -left-2 top-1.5 border-4 border-main opacity-50"></div>
              <p className="text-sm text-(--text-secondary) italic mt-6">
                ...and beyond
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
