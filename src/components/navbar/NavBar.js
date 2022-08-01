import './NavBar1.css';
import CardWidget from '../CarWidget/Carwidget';
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
      <CardWidget/>
    </div>
  </div>
</nav>
  );
}

export default NavBar;