import styled from 'styled-components';
import { css } from 'styled-components';

const breakpoints = {
  s: '320px',
  m: '768px',
  l: '1280px',
};

export const mediaQuery = {
  s: `(min-width: ${breakpoints.s})`,
  m: `(min-width: ${breakpoints.m})`,
  l: `(min-width: ${breakpoints.l})`,
};

export const breakpoint = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const StatisticBox = styled.div`
  position: relative;

  ${breakpoint.m`
display: flex;
flex-direction: row;
`}
`;

export const StatisticsWrapper = styled.div`
  width: 280px;
  ${breakpoint.m`
    width: 350px;
  `}
`;
