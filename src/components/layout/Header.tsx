import logo from "../../assets/images/logos/logo.jpg";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-4">
        <div className="px-4">
          <div className="flex flex-row  bg-stone-200">
            <a className="flex items-center space-x-1" href="/">
              <img src={logo} />
            </a>
            <input type="search" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
