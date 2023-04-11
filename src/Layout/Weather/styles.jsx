import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const WeatherContainer = styled.section`
  width: 100%;
  .cards{
    width: 100%;
    height: 15em;
    background-color: rgba(0,0,0, .8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    position: fixed;
    bottom: 0;
    @keyframes showBar {
        from{
          opacity: 0;
          transform: translateY(20%);
        }
        to{
          opacity: 1;
          transform: translateY(0);
        }
      }
      animation: showBar .5s;

    svg{
      font-size: 2em;
      position: absolute;
      bottom: 0;
      cursor: pointer;
      @keyframes blinkArrow {
        from{
          opacity: 0;
        }
        to{
          opacity: 1;
        }
      }
      animation: blinkArrow 1s infinite;
    }
  }
  .hide{
    display: none;
  }
  .show{
    width: 2em;
    height: 2em;
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 5;
    cursor: pointer;
    svg{
      width: 2em;
      height: 2em;
      @keyframes blinkArrow {
        from{
          opacity: 0;
        }
        to{
          opacity: 1;
        }
      }
      animation: blinkArrow 1s infinite;
    }
  }
  .main{
    position: fixed;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0,0,0, .8) 70%, transparent);
    display: flex;
    padding: 1em;
    width: 100%;
    gap: 1em;
    @keyframes showWeather {
      from{
        transform: translateY(20%);
      }
      to{
        transform: translateY(0);
      }
    }
    animation: showWeather 1s;
    h1{
      font-size: 5em;
      font-weight: 300;
    }
    .place{
      h2{
        font-weight: 300;
      }
      h3{
        font-weight: 300;
      }
      .rest{
        display: flex;
        p{
          margin-right: .2em;
          svg{
            margin-right: .2em;
          }
          font-weight: 300;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .cards{
      overflow: scroll;
    }
  }
`;
