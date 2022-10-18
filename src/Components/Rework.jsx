import Image from "./Shared/Image";

import ReworkLogo from "../Assets/Images/img-rework.png";
import Arrow from "../Assets/Images/arrow-rework.png";
import Crumple from "../Assets/Images/img-crumple.png";

import "./Rework.scss";

function Rework() {
  return (
    <>
      <section id="rework">
        <h1>
          Our book REWORK is a fresh approach to running a business. It's a New
          York Times and Wall Street Journal bestseller.
        </h1>

        <div className="book">
          <a
            href="https://books.google.com/books/about/Rework.html?id=U77um_h_dgcC"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={ReworkLogo} alt="rework" />
          </a>
        </div>

        <div className="quotes">
          <div>
            &ldquo;If given a choice between investing in someone who has read
            REWORK or has an MBA, I'm investing in REWORK every time. A must
            read for every entrepreneur.&rdquo;
          </div>
          <p>- Mark Cuban, co-founder HDNet, owner of the Dallas Mavericks</p>

          <div>
            "The wisdom in these pages is edgy yet simple, straightforward, and
            proven. Read this book multiple times to help give you the courage
            you need to get out there and make something great."
          </div>
          <p>- Tony Hsieh, CEO of Zappos.com</p>
        </div>

        <div className="arrow-right">
          <Image src={Arrow} alt="37signals arrow" />
        </div>

        <div className="crumple">
          <a href="/">
            <Image src={Crumple} alt="crumpled paper" />
            <p>Find out more</p>
          </a>
        </div>
      </section>

      <hr />
    </>
  );
}

export default Rework;
