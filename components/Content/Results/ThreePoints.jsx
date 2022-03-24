import React from 'react';

import styled from 'styled-components';

const generateRotate = (props) => {
  const rotation = props.rotate ? `-90deg` : `null`;
  const position = props.position;
  return position === 'relative'
    ? `position: ${position};`
    : `
  transform: rotate(${rotation});
  position: ${position};
  content: '';
  right: 10px;
  top: 18px;
  `;
};

const ThreePointsStyles = styled.div`
  display: inline-block;

  background: var(--white);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-left: 0.8rem;
  ${generateRotate}

  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    background: var(--white);
    width: 6px;
    border-radius: 50%;
    height: 6px;
  }

  &::before {
    left: 10px;
  }
  &::after {
    right: 10px;
  }
`;

export const ThreePoints = ({ $rotate, $position }) => {
  return (
    <>
      <ThreePointsStyles
        rotate={$rotate}
        position={$position}
      ></ThreePointsStyles>
    </>
  );
};
