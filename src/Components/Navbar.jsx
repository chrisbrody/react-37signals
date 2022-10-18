import Link from "./Shared/Link";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" txt="Company blog" />
        </li>
        <li>
          <Link href="/" txt="Our story" />
        </li>
        <li>
          <Link href="/" txt="Follow us on Twitter" />
        </li>
        <li>
          <Link href="/" txt="System status" />
        </li>
        <li>
          <Link href="/" txt="Sign in" class="signin" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
