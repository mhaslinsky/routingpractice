// import classes from "./header.module.css";
import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import logoImg from "../imgs/Logo-Test.png";
import classes from "./header.module.css";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  menuButton: {
    fontWeight: 600,
    fontSize: 18,
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: { height: 50 },
  active: { color: "#fca14d" },
}));

const headersData = [
  {
    label: "Welcome",
    href: "/welcome",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

function Header() {
  const { header, menuButton, toolbar, img, active } = useStyles();
  const logoImage = <img src={logoImg} alt='Logo' className={img}></img>;

  const getMenuButtons = headersData.map(({ label, href }) => {
    return (
      <Button
        {...{
          key: label,
          color: "inherit",
          to: href,
          component: NavLink,
          className: menuButton,
          activeClassName: active,
        }}
      >
        {label}
      </Button>
    );
  });

  return (
    <header>
      <AppBar position='sticky' className={header}>
        <Toolbar className={toolbar}>
          {logoImage}
          <div>{getMenuButtons}</div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
