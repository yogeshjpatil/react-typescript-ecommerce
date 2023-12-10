import logo from "../../assets/images/logos/logo.jpg";
import CartBox from "./CartBox";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-4">
        <div className="px-4">
          <div className="flex flex-row">
            <a className="flex space-x-1" href="/">
              <img src={logo} />
            </a>
            <div className="flex">
              <ol>
                <li>EN</li>
                <li>Fr</li>
              </ol>
            </div>
            <div className="flex-1 ml-20">
              <SearchBox />
            </div>
            <div className="flex px-4 py-4 ml-20">
              <CartBox />
            </div>
            <div className="flex px-4 py-4">
              <a>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
