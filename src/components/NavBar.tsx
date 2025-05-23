const Navbar = () => {
  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <div className="h-16 mx-auto px-5 flex items-center justify-between max-w-7xl">
        <a
          href="#Inicio"
          className="text-2xl font-bold hover:text-cyan-500 transition-colors cursor-pointer"
        >
          Sebian.dev
        </a>
        <nav>
          <ul className="flex items-center gap-5 text-sm font-medium">
            <li>
              <a
                className="hover:text-cyan-500 transition-colors"
                href="#sobre-mi"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                className="hover:text-cyan-500 transition-colors"
                href="#proyectos"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                className="hover:text-cyan-500 transition-colors"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:text-cyan-500 transition-colors"
                href="#Contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
