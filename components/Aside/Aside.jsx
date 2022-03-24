import React, { useState } from 'react';
import logo from '../../public/images/foxbel-music.png';
import Image from "next/image";

import { Link, useNavigate } from 'react-router-dom';
import { AsideStyles } from './AsideStyles';

export const Aside = ({show}) => {
  const [itemActive, setItemActive] = useState(1);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <AsideStyles show={show}>
      <div className="sticky">
        <div className="logo" onClick={handleClick}>
          {/* <img src={logo} alt="foxbel-music" loading="lazy" /> */}
        </div>
        <div className="list">
          <h3 className="list__title">Mi Librería</h3>
          <Link
            to="/?q=recientes"
            className={`list__item ${itemActive === 1 ? 'active' : ''}`}
            onClick={() => setItemActive(1)}
          >
            Recientes
          </Link>
          <Link
            to="/?q=artistas"
            className={`list__item ${itemActive === 2 ? 'active' : ''}`}
            onClick={() => setItemActive(2)}
          >
            Artistas
          </Link>
          <Link
            to="/?q=albums"
            className={`list__item ${itemActive === 3 ? 'active' : ''}`}
            onClick={() => setItemActive(3)}
          >
            Álbums
          </Link>
          <Link
            to="/?q=canciones"
            className={`list__item ${itemActive === 4 ? 'active' : ''}`}
            onClick={() => setItemActive(4)}
          >
            Canciones
          </Link>
          <Link
            to="/?q=estaciones"
            className={`list__item ${itemActive === 5 ? 'active' : ''}`}
            onClick={() => setItemActive(5)}
          >
            Estaciones
          </Link>
        </div>
        <div className="list">
          <h3 className="list__title">Playlist</h3>
          <Link
            to="/?q=metal"
            className={`list__item ${itemActive === 6 ? 'active' : ''}`}
            onClick={() => setItemActive(6)}
          >
            Metal
          </Link>
          <Link
            to="/?q=dance"
            className={`list__item ${itemActive === 7 ? 'active' : ''}`}
            onClick={() => setItemActive(7)}
          >
            Para bailar
          </Link>
          <Link
            to="/?q=rock"
            // activeClassName="active"
            className={`list__item ${itemActive === 8 ? 'active' : ''}`}
            // activeclassname={`list_item ${itemActive === 8 ? 'active' : null}`}

            onClick={() => setItemActive(8)}
          >
            Rock 90s
          </Link>
          <Link
            to="/?q=baladas"
            className={`list__item ${itemActive === 9 ? 'active' : ''}`}
            // activeclassname={`list_item ${itemActive === 9 ? 'active' : null}`}

            onClick={() => setItemActive(9)}
          >
            Baladas
          </Link>
        </div>
      </div>
    </AsideStyles>
  );
};
