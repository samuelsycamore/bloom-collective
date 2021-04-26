export default function HeaderNav() {
  return (
    <header className="header-nav">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <img src="/bloom_logo_white.svg" alt="Bloom Co" className="logo" />
          </div>
          <div className="col">
            <nav>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
