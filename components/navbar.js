export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      {/* <div class="container-fluid"> */}
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

    {/* hamburger button for small screens */}
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarResponsive" 
      aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>

       <div className="collapse navbar-collapse" id="navbarNav">
         <div className="navbar-nav">
             <a href="/" className="nav-item nav-link">Home</a>
          
             <a href="/starter-household" className="nav-item nav-link">Starter</a>

             <a href="/legacy-household" className="nav-item nav-link">Legacy</a>

             <a href="/new-sim" className="nav-item nav-link">Sim</a>

             <a href="/individual-randomizers" className="nav-item nav-link">Individual Randomizers</a>
         </div>
       </div>
       {/* </div> */}
     </nav>
  );
}
