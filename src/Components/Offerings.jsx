import "./Offerings.scss";

function Offerings() {
  return (
    <>
      <section id="offerings">
        <h1>Here's everything we offer, soup to nuts.</h1>

        <div className="column">
          <h2>Our services</h2>
          <ul>
            <li>
              <a href="/">The Job Board</a>
              <br />
              <small>Find (or post) a programming or design job.</small>
            </li>
            <li>
              <a href="/">37signals Speaks</a>
              <br />
              <small>Videos of our keynotes and interviews.</small>
            </li>
          </ul>
          <h2>Feature Stories</h2>
          <ul>
            <li>
              <a href="/">Bootstrapped &amp; Proud</a>
              <br />
              <small>We profile successful small businesses.</small>
            </li>
            <li>
              <a href="/">Exit Interviews</a>
              <br />
              <small>Interviews with companies post-acquisition.</small>
            </li>
          </ul>
        </div>
        <div className="column-end">
          <h2>Our books</h2>
          <ul>
            <li>
              <a href="/">REWORK</a>
              <br />
              <small>Our take on building a great business.</small>
            </li>
            <li>
              <a href="/">Getting Real</a>
              <br />
              <small>Learn how to build software the easy way.</small>
            </li>
          </ul>
          <h2>Our open-source contributions</h2>
          <ul>
            <li>
              <a href="/">Ruby on Rails</a>
              <br />
              <small>A powerful &amp; simple web app framework.</small>
            </li>
            <li>
              <a href="/">Open Source</a>
              <br />
              <small>
                A list of projects we've released &amp; contributed to.
              </small>
            </li>
          </ul>
        </div>
      </section>

      <hr />
    </>
  );
}

export default Offerings;
