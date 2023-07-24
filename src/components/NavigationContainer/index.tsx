import React, { useEffect, useState } from "react";

export default function NavigationContainer() {
  const [active, setActvie] = useState(false);

  return (
    <header>
      <div
        className="flex container between"
        onClick={() => {
          setActvie(!active);
        }}
      >
        <div className="logo">🔥 로또 Bot 🔥 </div>
        <div className="menu mo">
          <div className={`${active ? "active" : ""} mobile_nav`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <ul className={`menu_wrap mo ${active ? "active" : ""}`}>
          <li>
            <a href="">🔥 로또 자동 생성기 </a>
          </li>
          <li>
            <a href="">🎊 최신 로또 번호</a>
          </li>
          <li>
            <a href="">문의하기</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
