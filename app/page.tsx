export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 gap-12 max-w-[400px]">
      <main>
        <div>
          <img src="./avatar.webp" alt="Jakub Jurkian" width="24px" />
          <div>
            <span>👋</span> Open to work
          </div>
        </div>

        <div>
          <h1>I&apos;m Jakub Jurkian</h1>
          <h2>
            Web Developer specializing in <span>React</span> &<span>.NET</span>
          </h2>

          <p>
            Building scalable Applications with clean architecture. Currently
            studying IT at the University of Gdańsk.
          </p>

          <a href="resume.pdf" download>
            Download Resume
          </a>
        </div>
      </main>

      <nav className="grid grid-cols-1 gap-4 bg-card">
        <a href="projects.html" className="bento-box">
          <span>
            <svg
              width="24px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m494.165 640.333-278.4 890.774 101.867 31.786L572.459 747h1211.306l-183.36 917.12c-5.013 24.853-26.986 42.88-52.266 42.88H159.979c-29.334 0-53.334-23.893-53.334-53.333v-1440h454.507L732.779 427h760.533v106.667h106.667V320.333H783.872L612.139 107H-.021v1546.667c0 88.213 71.786 160 160 160h1388.16c75.946 0 141.973-54.08 156.906-128.64l208.96-1044.694H494.165Z" />
            </svg>
          </span>
          <h3>My Projects</h3>
          <span className="arrow">→</span>
        </a>

        <a href="about.html" className="bento-box">
          <span>
            <svg
              width="24px"
              viewBox="0 0 52 52"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M26,52A26,26,0,0,1,22.88.19,25.78,25.78,0,0,1,34.73,1.5a2,2,0,1,1-1.35,3.77,22,22,0,0,0-21,38,22,22,0,0,0,35.41-20,2,2,0,1,1,4-.48A26,26,0,0,1,26,52Z" />
              <path d="M26,43.86a2,2,0,0,1-2-2V22.66a2,2,0,1,1,4,0v19.2A2,2,0,0,1,26,43.86Z" />
              <circle cx="26" cy="15.71" r="2.57" />
            </svg>
          </span>
          <h3>About Me</h3>
          <span className="arrow">→</span>
        </a>

        <a
          href="https://github.com/JakubJurkian"
          className="bento-box"
          target="_blank"
        >
          <span>
            <svg width="24px" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
          <h3>GitHub</h3>
          <span className="arrow">→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jakub-jurkian-96625435b/"
          className="bento-box"
          target="_blank"
        >
          <span>
            <svg
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </span>
          <h3>LinkedIn</h3>
          <span className="arrow">→</span>
        </a>
      </nav>

      <footer>
        <a href="mailto:kuba.jur03@gmail.com">Email</a>
      </footer>
    </div>
  );
}
