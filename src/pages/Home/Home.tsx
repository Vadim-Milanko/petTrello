import React from 'react';

import './style.scss';
import Header from '../../components/Header/Header';

function Home(): JSX.Element {
  return (
    <div className="homeWrap">
      <Header />
      <section className="homeWrap__info">
        <h1 className="homeWrap__info__title">Trello helps teams get things done efficiently.</h1>
        <p className="homeWrap__info__description">
          Team up, manage projects, and take productivity
          to the next level in your own unique way with Trello.
        </p>
      </section>
    </div>
  );
}

export default Home;
