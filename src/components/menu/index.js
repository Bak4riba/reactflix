import React from 'react';
import Logo from '../../assets/img/loguinho.png';
import './menu.css';
import Button from '../button';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} width="130px" alt="Logo DevFLix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/new/video">
        Novo Video
      </Button>
    </nav>
  );
}
export default Menu;
