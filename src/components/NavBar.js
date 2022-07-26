import { useLayoutEffect } from "react";
import '../NavBar1.css';
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <div className="divLogo">
      <a href="#">
      <img className="imgLogo"src="https://i.pinimg.com/236x/4c/1c/0b/4c1c0be27db3490a8e01a49bcc7fe228.jpg"></img>
      </a>
      </div>
    <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle letras" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Proteinas</a></li>
            <li><a className="dropdown-item" href="#">Creatinas</a></li>
            <li><a className="dropdown-item" href="#">Pre-work</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link letras" href="#">Proposito</a>
        </li>
        <li className="nav-item">
          <a className="nav-link letras" href="#">Contacto</a>
        </li>
      </ul>
      <div className="divIcono">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default NavBar;