import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Warning } from './styled';

export default function Page404() {
  return (
    <Container>
      <Warning>Essa página não existe.</Warning>
    </Container>
  );
}
