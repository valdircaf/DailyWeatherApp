import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LoaderContainer = styled.section`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  img{

    width: 15em;
    @keyframes showLogo {
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
    animation: showLogo 2s infinite;
  }
  @media screen and (max-height: 900px){
    top: 20%;
  }
`;
