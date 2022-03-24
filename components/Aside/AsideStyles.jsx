import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const AsideStyles = styled.aside`
  background: var(--dark-red-second);
  color: var(--white);
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  ${breakpoints.tablet} {
    position: fixed;
    height: 100vh;
    content: '';
    right: ${(props) => (props.show ? '-55%' : '-100%')};
    z-index: 9999;
    transition: all 0.3s ease;
  }

  ${breakpoints.phone} {
    right: ${(props) => (props.show ? '-45%' : '-100%')};
  }

  .sticky{
    /* border: 1px solid white; */
    position: sticky;
    width: 100%;
    left: 0;
    top: 0;

    ${breakpoints.tablet}{
      position: relative;
    }
    .logo {
        /* border: 1px solid green; */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 6rem;
        cursor: pointer;
        ${breakpoints.tablet} {
          justify-content: start;
          padding: 0 1.5rem;
        }
        ${breakpoints.phone} {
          justify-content: start;
          padding: 1.2rem 1.5rem;
        }
        img {
          /* border: 1px solid blue; */
          width: 250px;
          height: 60px;
          margin: 2rem 0;
          ${breakpoints.tablet} {
            width: 220px;
            height: 60px;
          }
          ${breakpoints.phone} {
            width: 110px;
            height: 35px;
          }
        }
      }
      .list {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
    &__title {
      padding: 0.5rem 2rem;
      font-size: 22px;
      font-weight: bold;
    }
    &__item {
      font-size: 16px;
      padding: 0.4rem 2rem;
      font-weight: 400;
      color: var(--white);
      cursor: pointer;
      transition: color 0.3s ease;
      position: relative;
      &.active {
        color: var(--main-red);
        &::before {
          position: absolute;
          content: '';
          top: 3px;
          bottom: 2px;
          left: 0;
          background: var(--main-red);
          width: 0.3rem;
          height: 80%;
        }
      }

      &:hover {
        color: var(--main-red);
      }
    }
  }
  }
  

  
`;
