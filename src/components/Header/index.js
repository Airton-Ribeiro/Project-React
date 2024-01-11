import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome /> Home
      </Link>
      <Link to="/login">
        <FaUserAlt /> user
      </Link>
      <Link to="/out">
        <FaSignInAlt /> Sair
      </Link>
    </Nav>
  );
}
