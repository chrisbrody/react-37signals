import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <h3>More about 37signals</h3>
        <ul>
          <li>
            <a href="/">Follow us on Twitter</a>
          </li>
          <li>
            <a href="/">Get our newsletter</a>
          </li>
          <li>
            <a href="/">Company blog</a>
          </li>
          <li>
            <a href="/">37signals API</a>
          </li>
          <li>
            <a href="/">Our story</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
        <p>
          All text and design is copyright &copy;1999-{new Date().getFullYear()}{" "}
          37signals, LLC. All rights reserved.
          <a href="/">Privacy Policy</a>
          <a href="/">Security Information</a>
          <a href="/">Contact us</a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
