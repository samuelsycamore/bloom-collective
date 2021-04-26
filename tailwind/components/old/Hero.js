export default function Hero() {
  return (
    <div className="block hero">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <div className="content">
              <div className="title">
                <h1>
                  <span class="red line">Business-driven</span> <br />
                  content workflows
                </h1>
              </div>
              <p>
                Every business needs to be a content producer. Let Bloom
                Collective show you how to do it right.
              </p>
              <a
                href="mailto:matt@bloomcollective.com?subject=Inquiry"
                class="btn"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="col">
            <img src="/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
