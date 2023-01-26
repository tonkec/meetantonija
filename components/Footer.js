export default function Footer() {
  return (
    <footer className="py-20 bg-black md:px-20 print-hidden">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
        <a href="/" className="px-4 text-white">
          meetantonija.com
        </a>

        <div>
          <a
            href="https://www.linkedin.com/in/antonija-simic/"
            target="_blank"
            className="px-4 text-white"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/tonkec"
            target="_blank"
            className="px-4 text-white"
          >
            Github
          </a>
          <a
            href="https://codepen.io/tonkec"
            target="_blank"
            className="px-4 text-white"
          >
            Codepen
          </a>
        </div>
      </div>
      <div className="px-4 mt-6">
        <p className="text-primary"> ctrl + F - ESC</p>
      </div>
    </footer>
  );
}
