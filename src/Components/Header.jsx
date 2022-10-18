// components
import Product from "./Shared/Product";
import Image from "./Shared/Image";

// images
import LogoLg from "../Assets/Images/logo-37s-large.png";
import Basecamp from "../Assets/Images/logo-bc.png";
import Highrise from "../Assets/Images/logo-hr.png";
import Campfire from "../Assets/Images/logo-cf.png";

// styles
import "./Header.scss";

function Header() {
  return (
    <>
      <header>
        <Image src={LogoLg} alt="37signals logo" />
        <h1>
          Making collaboration productive and enjoyable for people every day.
        </h1>
        <h2>
          Frustration-free web-based apps for collaboration, sharing
          information, and making decisions.
        </h2>
        <div id="products">
          <Product
            src={Basecamp}
            alt="Basecamp Logo"
            symbol="&reg;"
            h3="Basecamp"
            h4="Manage Projects"
            p="Used by millions for project management."
          />
          <Product
            src={Highrise}
            alt="Highrise Logo"
            h3="Highrise"
            symbol="&reg;"
            h4="Manage Contacts"
            p="Know the people you do business with."
          />
          <Product
            src={Campfire}
            alt="Campfire Logo"
            h3="Campfire"
            symbol="&trade;"
            h4="Work in Real-Time"
            p="Group chat rooms for your business."
          />
        </div>
      </header>

      <hr />
    </>
  );
}

export default Header;
