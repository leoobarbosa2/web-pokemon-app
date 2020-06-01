import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/Form';
import logo from '../../assets/logo.png';

import './styles.scss';

function Dashboard() {
  return (
    <section className="dashboard">
      <img src={logo} alt="Pokemon Logo" />
      <Form />
      <Link to="/list">see all pokemons</Link>
    </section>
  );
}

export default Dashboard;
