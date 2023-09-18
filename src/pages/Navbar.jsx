import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">NFT Marketplace</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="marketplace">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/rankings">Rankings</NavLink>
          </li>
          <li>
            <NavLink to="/wallet">Connect a wallet</NavLink>
          </li>
          <li>
            <NavLink to="/singup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
