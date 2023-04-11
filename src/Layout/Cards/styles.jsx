import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CardsContainer = styled.div`

width: 10em;
height: 10em;
background-color: rgba(0,0,0,.7);
border-bottom: 3px solid #0659cd;
border-radius: .5em;
&:hover{
  transform: scale(1.2);
  z-index: 5;
}
cursor: pointer;
transition: all .2s;
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: .2em;
  .temp{
    display: flex;
    flex-direction: row;
    gap: 2em;
  }
  img{
    width: 2em;
  }
  h3{
    margin-top: 1em;
    font-size: .8em;
    color: #0659cd;
  }
  h2{
    font-size: 1.5em;
    font-weight: 300;
  }
}
@media screen and (max-width: 1000px){
  width: 10em;
}
`;
