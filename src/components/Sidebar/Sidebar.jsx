import { Link, useLocation } from "react-router-dom";
import AspireLogo from "../../assets/aspire-logo.svg";
import "./Sidebar.css";
import { NAV_LINKS, NAVIGATION_CONST } from "./SidebarData";
import useMobile from "../../hooks/useMobile";

const Sidebar = () => {
  const isMobile = useMobile();
  const location = useLocation();

  const NAV_ITEMS = NAV_LINKS.map((item) => (
    <Link
      key={item.path}
      to={item.path}
      className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
    >
      <img
        src={isMobile ? item.mobileIcon : item.icon}
        alt={item.label}
        className="icon"
      />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={AspireLogo} alt="Aspire Logo" />
        <p className="tagline">{NAVIGATION_CONST.DESCRIPTION}</p>
      </div>
      <nav className="nav-links">{NAV_ITEMS}</nav>
    </aside>
  );
};

export default Sidebar;
