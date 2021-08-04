import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Line,
  StatusContainer,
  LabelContainer,
  Dot,
  Label,
  FirstLabel,
} from './styles';

export default function Timeline({start = null, end = null}) {
  const started = !!start;
  // evaluates to truth
  const delivered = !!end;
  return (
    <Container>
      <Line />
      <StatusContainer>
        <LabelContainer>
          <Dot filling />
          <FirstLabel>Aguardando{'\n   '} retirada</FirstLabel>
        </LabelContainer>

        <LabelContainer>
          <Dot filling={started} />
          <Label>Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filling={delivered} />
          <Label>Entregue</Label>
        </LabelContainer>
      </StatusContainer>
    </Container>
  );
}

Timeline.defaultProps = {
  start: PropTypes.string,
  end: PropTypes.string,
};
