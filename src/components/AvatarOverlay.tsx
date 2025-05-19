const AvatarOverlay = () => {
    return (
      <div className="absolute inset-0 z-10 flex justify-center items-start pt-2 pointer-events-none">
        <img
          src="/avatar.webp"
          alt="Avatar"
          className="w-[95%] h-auto object-contain max-w-full max-h-full"
        />
      </div>
    );
  };
  
  export default AvatarOverlay;
  