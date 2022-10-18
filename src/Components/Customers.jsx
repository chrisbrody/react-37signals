//components
import Image from "./Shared/Image";

// images
import Arrow from "../Assets/Images/arrow-customer.png";
import World from "../Assets/Images/img-world-badge.png";
import Companies from "../Assets/Images/logos-companies-bw.png";

// styles
import "./Customers.scss";

console.log("text");

function Customers() {
  return (
    <>
      <section id="customers">
        <h1>
          Millions of entrepreneurs, freelancers, small businesses, and
          departments inside big organizations rely on our web apps.
        </h1>

        <div className="meet">
          <a href="/">Customers</a>
          <p>Meet some customers</p>
        </div>

        <div className="arrow-left">
          <Image src={Arrow} alt="37signals arrow" />
        </div>

        <div className="globe">
          <a href="/">
            <Image
              src={World}
              alt="Trusted by millions of people in over 30 countries"
            />
          </a>
        </div>

        <p>
          Our loyal customers include designers, developers, freelancers,
          lawyers, accountants, architects, non-profits, charities,
          universities, PR firms, retailers, manufacturers, consultants,
          authors, publishers, government agencies, students, marketers,
          airlines, restaurants, filmmakers, farmers, and just about everyone
          in-between.
        </p>

        <p>
          The world's most popular brands depend on our products every day.
          We'll never take their trust - or your trust - for granted.
        </p>

        <img src={Companies} alt="The best brands use our products" />
      </section>

      <hr />
    </>
  );
}

export default Customers;
