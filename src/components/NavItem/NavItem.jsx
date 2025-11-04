import { NavLink } from "react-router-dom";

const NavItem = ({item}) => {
  const { label, link, Icon } = item;
  return (
    <NavLink
      className="flex gap-2 items-center"
      style={({ isActive }) => ({ color: isActive ? "#B2DFDB" : "black", fontWeight: isActive ? "bold" : "normal" })}
      to={link}
    >
      <Icon sx={{ width: 30 }} />
      <span className="text-xl ">{label}</span>
    </NavLink>
  );
};

export default NavItem;
