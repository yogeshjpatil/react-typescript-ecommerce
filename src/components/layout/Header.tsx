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
            <div className="flex-1 ml-20">
              <SearchBox />
            </div>
            <div className="flex-1 align-middle justify-center">
              <CartBox />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
