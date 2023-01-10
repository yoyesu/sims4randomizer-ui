export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm sticky-top">
      <a href="/" className="navbar-brand">
        <div className="navbar-logo-container">
          <img
            src="/plumbob.png"
            id="navbar-logo"
            alt=""
            className="img-fluid"
          />
        </div>
      </a>

        {/* this is the hamburger button for small screens */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav d-flex justify-content-around">
            <a href="/" className="nav-link nav-item">Home</a>
          
            <a href="/starter-household" className="nav-link nav-item">Starter</a>

            <a href="/legacy-household" className="nav-link nav-item">Legacy</a>

            <a href="/new-sim" className="nav-link nav-item">Sim</a>

            <a href="/individual-randomizers" className="nav-link nav-item">Individual Randomizers</a>

        </div>
      </div>
    </nav>
  );
}
