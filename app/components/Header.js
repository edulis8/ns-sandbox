
import React from 'react';
import { Link } from 'react-router';

import { headerStyle } from '../styles';

const Header = () => (
  <div>
    <div style={headerStyle}>
      <Link to="/"> Index |</Link>
      <Link to="/users"> Suitelet Data (4000 Lines) |</Link>
      <Link to="/restlet"> Restlet Data (Searchable) </Link>
    </div>
    <br />
  </div>
);

export default Header;
