import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CategoryIcon from '@mui/icons-material/Category';
import NavItem from "../NavItem/NavItem";

const NavItemContainer = () => {
  const navItems =  [
    {
      id: 1,
      label: "Home",
      link: "/",
      Icon: HomeIcon
    },
    {
      id: 2,
      label: "Budgets",
      link: "/budgets",
      Icon: DataUsageIcon
    },
    {
      id: 3,
      label: "Reports",
      link: "/reports",
      Icon: AssessmentIcon
    },
    {
      id: 4,
      label: "Categories",
      link: "/categories",
      Icon: CategoryIcon
    },
  ]
  return (
    <div className="flex flex-col gap-5">
      {
        navItems.map(item => <NavItem key={item.id} item={item}/>)
      }
    </div>
  );
};

export default NavItemContainer;
