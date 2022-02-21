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


export const DoughnatStat = styled.div`
  ${breakpoint.m`
    margin-right: 30px;
  `}
  ${breakpoint.l`
    margin: 0 30px;
  `}
`;

export const DoughnatPie = styled.div`
  position: relative;
  height: 280px;
  width: 280px;
  margin: 10px 0 30px;

  ${breakpoint.m`
    flex-direction: row;
  
    height: 320px;
  `}
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Poppins",sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  ${breakpoint.m`
  text-align: unset;
  `}
`;

export const BalancePie = styled.div`
  position: absolute;
 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  line-height: 1.5;
  font-weight: bold;
  ${breakpoint.m`
  top: 45%;
  `}

`;