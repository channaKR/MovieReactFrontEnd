import "./NavBar.css"
export default function Navbar(){

return(
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button className="btn btn-dark">Add user</button>
  </div>
</nav>
    
</div>


)

}