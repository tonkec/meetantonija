export default function Footer() {
  return (
    <footer className="py-20 bg-black md:px-20 print-hidden">
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
        <a href="/" className="px-4 text-white underline hover:text-primary">
          meetantonija.com
        </a>

        <div>
          <a
            href="https://gist.github.com/tonkec/344482591e09ab240458ebbebbc3dc1b"
            target="_blank"
            className="px-4 text-white underline hover:text-primary"
          >
            Cover letter
          </a>
          <a
            href="https://www.linkedin.com/in/antonija-simic/"
            target="_blank"
            className="px-4 text-white underline hover:text-primary"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/tonkec"
            target="_blank"
            className="px-4 text-white underline hover:text-primary"
          >
            Github
          </a>
          <a
            href="https://codepen.io/tonkec"
            target="_blank"
            className="px-4 text-white underline hover:text-primary"
          >
            Codepen
          </a>
        </div>
      </div>
    </footer>
  );
}
