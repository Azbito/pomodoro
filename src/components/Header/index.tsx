import { HeaderContainer } from "./styles";

import logoIgnite from '../../../public/Logo.svg'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/historic" title="Historic">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}