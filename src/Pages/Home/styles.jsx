import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HomeContainer = styled.header`

height: 100vh;
background-color: #000;
color: #FFF;
background-position: bottom center;
background-size: cover;

.input{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  input{
    background-color: rgba(255,255,255, .4);
    height: 3em;
    width: 20em;
    padding: 1em;
    border: none;
    border-radius: 1em;
    outline: 0;
    color: #FFF;
    font-weight: bold;
    &::placeholder{
      color: #FFF;
    }
  }
  svg{
    margin-left: 1em;
    font-size: 1.2em;
    cursor: pointer;
    position: relative;
    top: .3em;
    right: 2.5em;
  }
}

@media screen and (min-width: 1200px){

  .input{
    input{
      width: 40em;
    }
    svg{
      position: relative;
      top: .3em;
      right: 2.5em;
    }
  }

}


`;
