import {css} from 'styled-components';

const DEPTH_COLORS = {
  0: '#fff',
  1: '#ededed',
  2: '#ccc',
};

const depth = css`
  background-color: ${props => DEPTH_COLORS[props.depth]}
`;

export default depth;
