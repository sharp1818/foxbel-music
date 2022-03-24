import React, { useState } from 'react';

import { Aside } from './Aside/Aside';
import { Content } from './Content/Content';
import { Search } from './Content/Search/Search';
import { VideoDetail } from './Content/VideoDetails/VideoDetail';
import { Results } from './Content/Results/Results';
import { Footer } from './Footer/Footer';

// import { Helmet } from 'react-helmet';

const SearchSongs = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    {/* Helmet son los datos de la ventana */}

      {/* <Helmet>
        <title>Foxbel Music - Busca por canción, artista o álbum</title>
      </Helmet> */}

    {/* Contiene los componentes */}
      <div className="grid">
        <Aside show={show} setShow={setShow}/>
        <Content>
          <Search show={show} setShow={setShow}/>
          <VideoDetail/>
          <Results />
        </Content>
      </div>
      <Footer />
    </>
  );
};

export default SearchSongs
