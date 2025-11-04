import Logo from "../Logo/Logo";
import NavItemContainer from "../NavItemContainer/NavItemContainer";

const Sidebar = () => {
  return (
    <aside className="w-1/5 h-lvh p-10 bg-teal-50 flex flex-col justify-between">
      <Logo />
      <NavItemContainer />
    </aside>
  );
};

export default Sidebar;
