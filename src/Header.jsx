import { theme } from "./theme";
import "./header.css"
import Logo from './Logo'

const Header = () => {
  return (
    <header
      style={{
        background: theme.green,
        borderBottomColor: theme.brown,
        borderBottomWidth: "8px",
        borderBottomStyle: "solid",
      }}
    >
      {/* <h1>sh</h1> */}
      <Logo width={40} />
      <ul className="menu-display">
        <li>
          <a className="menu-link" href="check-in">Check in</a>
        </li>
        <li>
          <a className="menu-link" href="music">Music</a>
        </li>
        <li>
          <a className="menu-link" href="food">Food</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
