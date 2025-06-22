const BackgroundHeader = () => {
  return (
    <div
      id="Inicio"
      className="w-full h-screen bg-no-repeat bg-center overflow-x-hidden"
      style={{
        backgroundImage: "url('/backgraund_header.webp')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1c1f2b",
      }}
    ></div>
  );
};

export default BackgroundHeader;
