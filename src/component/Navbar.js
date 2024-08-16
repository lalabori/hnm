import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div>
        <div class="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div> 로그인 </div>
        </div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li> {menu} </li>
          ))}
        </ul>
        <div>
          <div className="search-area">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input class="search-style" type="text" placeholder="검색" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
