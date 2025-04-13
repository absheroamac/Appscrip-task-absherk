import React from "react";
import Logo from "../../assets/header/Logo.svg";
import LogoText from "../../assets/header/logoText.svg";
import LikeIcon from "../../assets/header/like.svg";
import UserIcon from "../../assets/header/user.svg";
import SearchIcon from "../../assets/header/search.svg";
import BagIcon from "../../assets/header/bag.svg";
import DropDown from "./DropDown";
import style from "./Header.module.css";
import MenuIcon from "../../assets/header/menuIcon.svg";
import MobileNav from "./MobileNav";

const options = ["ENG", "SPA", "CHI", "JPN"];
const menuItems = [
  { title: "SHOP", link: "/" },
  { title: "SKILLS", link: "/" },
  { title: "STORIES", link: "/" },
  { title: "ABOUT", link: "/" },
  { title: "CONTACT US", link: "/" },
];
const Header = () => {
  return (
    <div className="container">
      <header>
        <div className={style.headerDash}>
          <div>
            <button className={style.menuIcon}>
              <MenuIcon />
            </button>

            <Logo className={style.logoIcon} />
          </div>
          <LogoText className={style.logoText} />
          <div className={style.buttonsContainer}>
            <button>
              <LikeIcon />
            </button>
            <button className={style.smInvisible}>
              <UserIcon />
            </button>
            <button>
              <SearchIcon />
            </button>
            <button>
              <BagIcon />
            </button>
            <div className={style.smInvisible}>
              <DropDown options={options} />
            </div>
          </div>
        </div>

        <nav className={style.nav}>
          {menuItems.map((item, idx) => (
            <a href={item.link} key={idx} className={style.menuItems}>
              {item.title}
            </a>
          ))}
        </nav>
      </header>
      <hr></hr>
      <nav className={style.mobileNav}>
        <MobileNav headers={["HOME", "SHOP"]} current={"SHOP"} />
      </nav>
    </div>
  );
};

export default Header;
