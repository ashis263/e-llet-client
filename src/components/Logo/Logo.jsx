import favicon from "../../assets/favicon.png"

const Logo = () => {
  return (
    <div className="flex items-center gap-5">
      <img className="w-10" src={favicon} alt="favicon" />
      <h2 className="text-3xl font-bold font-audiowide pt-2 text-white">E-llet</h2>
    </div>
  );
}

export default Logo;
