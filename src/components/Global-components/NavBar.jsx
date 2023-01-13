import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark  navbar-container">
  <div className="container-fluid logotext-container">
    <a className="navbar-brand logo" href="/"><img src ={require("../photos/logo1.png")} alt='logo' style={{ width:"150px"}}/></a>
   
    <button className="navbar-toggler collasped" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle docs navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
      <ul className="navbar-nav" >
        <li className="nav-item">
          <Link to="/" className="nav-link navbar-heading" >Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle navbar-heading" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false" > */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About US
          </a>
          <ul className="dropdown-menu" >
            <li><Link className="dropdown-item" to="/aboutus" >About US</Link></li>
            <li><Link className="dropdown-item" to="/aboutus/vision" >Vision and Mission</Link></li>
            <li><Link className="dropdown-item" to="/aboutus/BOD">Board of Directors</Link></li>
            <li><Link className="dropdown-item" to="/aboutus/keymanagement">Key Management Personnel</Link></li>
            <li><Link className="dropdown-item" to="/aboutus/infrastructure">Infrastucture</Link></li>
            {/* <li><Link className="dropdown-item" to="/aboutus/timeline">Timeline</Link></li> */}
            <li><Link className="dropdown-item" to="/aboutus/timelinenew">Timeline</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle navbar-heading"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Technology
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/technology/chemistryknowledge" >Chemistry Knowledge</Link></li>
            <li><Link className="dropdown-item" to="/technology/peptide" >Peptide Technology </Link></li>
            <li><Link className="dropdown-item" to="/technology/diagnostics" >Genomics Testing</Link></li>
            <li><Link className="dropdown-item" to="/technology/FormulationsTechnology" >Formulations Technology</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle navbar-heading" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
            Products
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/products/api">API</Link></li>
            <li><Link className="dropdown-item" to="/products/nutraceuticals">Nutraceuticals</Link></li>
            <li><Link className="dropdown-item" to="/products/specialitychemicals">High End Intermediates</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle navbar-heading" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Case Studies
          </a>
          <ul className="dropdown-menu">
            {/* <li><Link className="dropdown-item" to="/casestudies/formulations">Formulations</Link></li> */}
            <li><Link className="dropdown-item" to="/casestudies/stellencenutra">Nutraceuticals</Link></li>
            <li><Link className="dropdown-item" to="/casestudies/rtpcr">Genomics Testing</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link navbar-heading" >Contact US</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar