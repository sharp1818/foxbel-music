import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  z-index: 99999;
  background: var(--footer-color);
  box-shadow: inset 0px -5px 37px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px -5px 37px rgba(0, 0, 0, 0.2));
  display: flex;
  justify-content: space-between;

  .figure {
    display: flex;
    /* flex-wrap: wrap; */
    /* max-width: 22%; */
    width: 280px;
    /* border: 1px solid green; */

    ${breakpoints.tablet} {
      width: auto;
    }

    img {
      background: var(--main-red);
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    &__description {
      margin-left: 0.8rem;
      display: flex;
      flex-wrap: wrap;

      flex-direction: column;
      justify-content: center;
      color: var(--white);

      ${breakpoints.tablet} {
        display: none;
        width: 100%;
      }
      p {
        font-weight: 700;
        font-size: 13px;
      }
      span {
        display: inline-flex;
        font-weight: 400;
        font-size: 11px;
      }
    }
  }
  .middle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    button {
      width: 4rem;
      height: 4rem;
      border: none;
      cursor: pointer;
      background: transparent;
      &.play {
        border-radius: 50%;
        background: var(--light-red);
        padding: 1rem;
      }
       ${breakpoints.phone} {
      width: 5rem;
      height: 5rem;
    }
    }

   
      svg {
        fill: var(--white);
        width: 20px;
        height: 20px;
        /* padding: 1rem; */
      }
  }
  .volume {
    align-items: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    ${breakpoints.tablet} {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    input {
      -webkit-appearance: none;
      outline: none;
      height: 5px;
      margin: 0 15px;
      border-radius: 30px;

      ${breakpoints.tablet} {
        position: absolute;
        content: '';
        top: 1rem;
        left: -21px;
        transform: rotate(-90deg);
        width: 100px;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 22px;
        width: 22px;
        background: var(--white);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          border: 1px solid var(--main-red);
        }

        ${breakpoints.phone} {
          height: 18px;
          width: 18px;
        }
      }
    }
    .volume-control {
      margin: 0 2.8rem 0 0rem;
      /* ${breakpoints.tablet} {
        margin: 0 2.8rem 0rem 0rem;
      } */

      svg {
        fill: var(--white);
        width: 30px;
        height: 30px;
      }
    }
  }
`;
