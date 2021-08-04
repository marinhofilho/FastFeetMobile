import React from 'react';
import {format, parseISO} from 'date-fns';

import {Container, ProblemBox, DescriptionText, ProblemDate} from './styles';

export default function ProblemDetailed({problem, navigation}) {
  return (
    <Container>
      <ProblemBox>
        <DescriptionText numberOfLines={1}>
          {problem.description}
        </DescriptionText>
        <ProblemDate>
          {format(parseISO(problem.created_at), 'dd/MM/yyyy')}
        </ProblemDate>
      </ProblemBox>
    </Container>
  );
}
