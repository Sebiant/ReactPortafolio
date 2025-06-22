function SplitSections() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-center bg-cover overflow-hidden"
      style={{ backgroundColor: "#1c1f2b" }}
    >
      <div className="flex w-full h-full">
        {/* Sección Izquierda - About Me */}
        <section className="flex-1 text-white flex items-center justify-center p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <div className="max-w-md space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-100">
              About Me
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Soy Sebastián, ingeniero en sistemas y desarrollador full stack
              con experiencia en Java y Spring Boot. Me gusta trabajar en
              equipo, adaptarme a nuevos retos y mantener todo bajo control.
              Siempre busco aprender y mejorar.
            </p>
          </div>
        </section>

        {/* Sección Derecha - Tecnologías */}
        <section className="flex-1 text-white flex flex-col items-center justify-center p-12 bg-gray-800">
          <h2 className="text-4xl font-semibold mb-8 text-gray-100">
            Tecnologías que uso
          </h2>
          <ul className="grid gap-4 text-lg text-gray-300">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default SplitSections;
