import React, { useState } from "react";
import { StyledMenu, StylednNav } from "./Navbar.styles";

const Navbar = () => {
  const modes = [
    { id: 0, name: "pomodoro", value: "pomodoro" },
    { id: 1, name: "short break", value: "short" },
    { id: 2, name: "long break", value: "long" },
  ];

  const [activeMode, setActiveMode] = useState(0);
  const handleClick = (e) => {
    setActiveMode(e.target.id);
  };

  return (
    <StylednNav>
      <h1>pomodoro</h1>
      <StyledMenu onClick={handleClick} mode={activeMode}>
        {modes.map((el) => (
          <li key={el.id}>
            <button
              id={el.id}
              name={el.name}
              active={(el.id == activeMode).toString()}
            >
              {el.name}
            </button>
          </li>
        ))}
      </StyledMenu>
    </StylednNav>
  );
};

export default Navbar;
