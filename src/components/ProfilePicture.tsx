import { useThemeStore } from "../store/themeStore";

const ProfilePicture = () => {
  const { theme } = useThemeStore((state) => state);

  return (
    <div
      className={`relative w-full h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-110`}
    >
      <img
        src="/profile_dark.jpg"
        alt="Imagen de perfil darkmode"
        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="/profile_light.jpg"
        alt="Imagen de perfil lightmode"
        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ease-in-out ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default ProfilePicture;
