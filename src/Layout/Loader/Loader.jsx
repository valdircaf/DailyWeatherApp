import React from 'react';
import logo from '../Images/logo.png';
import { LoaderContainer } from './styles';

export default function Loader() {
  return (
    <LoaderContainer>
      <img src={logo} alt="Logo" />
    </LoaderContainer>
  );
}
