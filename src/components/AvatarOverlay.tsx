function AvatarOverlay() {
  return (
    <div
      className="absolute top-0 left-0 right-0 z-30 flex justify-center items-start pt-2 pointer-events-none"
      style={{ height: "auto" }}
    >
      <Avatar />
      <div
        className="absolute inset-0 flex flex-col items-end justify-center p-4 pointer-events-none"
        style={{ transform: "translateY(-10%)" }}
      >
        <Text />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="/avatar.webp"
      alt="Avatar"
      className="w-full h-full object-contain"
    />
  );
}

function Text() {
  return (
    <>
      <h1
        className="font-bold drop-shadow-lg text-right"
        style={{
          color: "#f5f7fa",
          fontSize: "200px",
          fontFamily: "'Cocogoose Pro', sans-serif",
          fontStyle: "italic",
          lineHeight: 1.05,
        }}
      >
        <span style={{ display: "block", marginBottom: "0.05em" }}>
          Hi, I'm
        </span>

        <span style={{ display: "block", marginTop: "0.05em" }}>Sebastian</span>
      </h1>

      <p
        className="italic text-right"
        style={{
          color: "#aab3c5",
          fontSize: "50px",
          fontFamily: "'Cocogoose Pro', sans-serif",
          fontStyle: "italic",
        }}
      >
        Web Developer
      </p>
    </>
  );
}

export default AvatarOverlay;
