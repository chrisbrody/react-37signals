import "./Manifesto.scss";

function Manifesto() {
  return (
    <>
      <section id="manifesto">
        <h1>
          We built the company that we'd want to do business with. We hope you
          do too.
        </h1>

        <div className="column">
          <div className="chapter">1</div>
          <div className="title">Useful is forever</div>
          <p>
            Bells and whistles wear off, but usefulness never does. We build
            useful software that does just what you need and nothing you don't.
          </p>

          <div className="chapter">2</div>
          <div className="title">Great service is everything</div>
          <p>
            We're famous for fast and friendly customer service. We work hard to
            make sure we live up to that reputation every day. See how our
            customers rate our service.
          </p>

          <div className="chapter">3</div>
          <div className="title">Clarity is king</div>
          <p>
            Buzzwords, lingo, and sensationalized sales-and-marketing-speak have
            no place at 37signals. We communicate clearly and honestly.
          </p>

          <div className="chapter">4</div>
          <div className="title">Our customers are our investors</div>
          <p>
            Our customers fund our daily operations by paying for our products.
            We answer to them - not investors, the stock market, or a board of
            directors.
          </p>
        </div>

        <div className="column-end">
          <div className="chapter">5</div>
          <div className="title">The basics are beautiful</div>
          <p>
            We'll never overlook what really matters: The basics. Great service,
            ease of use, honest pricing, and respect for our customer's time,
            money, and trust.
          </p>

          <div className="chapter">6</div>
          <div className="title">No hidden fees or secret prices</div>
          <p>
            We believe everyone is entitled to the best price we can offer. Our
            prices are public, published right on our site, and the same no
            matter who you are.
          </p>

          <div className="chapter">7</div>
          <div className="title">Software should be easy</div>
          <p>
            Our products are intuitive. You'll pick them up in seconds or
            minutes, not hours, days or weeks. We don't sell you training
            because you don't need it.
          </p>

          <div className="chapter">8</div>
          <div className="title">Long-term contracts are obscene</div>
          <p>
            No one likes being locked into something they don't want anymore.
            Our customers can cancel at any time, no questions asked. No
            setup/termination fees either.
          </p>
        </div>
      </section>

      <hr />
    </>
  );
}

export default Manifesto;
