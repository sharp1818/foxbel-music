import React from 'react';

import styled from 'styled-components';
import { SongGrid } from './SongGrid';

const ResultsStyles = styled.section`
  width: 100%;
  h2 {
    color: var(--main-red);
    font-weight: bold;
  }
`;
// Este componente contiene a Songrid, ¿se podría crear un solo componente?
export const Results = () => {
  return (
    <>
      <ResultsStyles>
        <h2 className="mb-2">Resultados</h2>
        <SongGrid />
      </ResultsStyles>
    </>
  );
};
