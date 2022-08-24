import "./Nav.css";
import SearchBar from "../Searchbar/Searchbar";

function Nav() {
  return (
    <>
      <div className="main-nav">
        <img src="./vite.svg" alt="" className="logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nav 3
              </a>
            </li>
          </ul>
          <SearchBar />
        </nav>
      </div>
    </>
  );
}

export default Nav;
