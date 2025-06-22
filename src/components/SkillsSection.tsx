const skills = [
  { name: "Java", icon: "/icons/java.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Spring Boot", icon: "/icons/springboot.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MariaDB", icon: "/icons/mariadb.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
];

export default function Skills() {
  return (
    <section
      className="w-full min-h-screen bg-no-repeat bg-center bg-cover overflow-x-hidden py-16 px-6 md:px-16"
      style={{
        backgroundColor: "#1c1f2b",
      }}
    >
      <h2 className="text-3xl font-bold text-center text-white mb-10 drop-shadow">
        Tecnologías que domino
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm text-white font-medium drop-shadow">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
