import {css} from 'styled-components';

const BORDER_COLOR = '#ddd';
const BORDER_WIDTH = '0.1em';

const border = css`
  border: ${BORDER_COLOR} solid ${BORDER_WIDTH};
    ${props => {
        if(props.borderLess) {
          return Array.isArray(props.borderLess) ?
              props.borderLess.map(direction => {
                switch (direction) {
                  case 'left':
                    return css`
                      border-left: 0;
                    `;
                  case 'right':
                    return css`
                      border-right: 0;
                    `;
                  case 'top':
                    return css`
                      border-top: 0;
                    `;
                  case 'bottom':
                    return css`
                      border-bottom: 0;
                    `;
                  default:
                    return css`
                      border: 0;
                    `;
                }
              })
            : css`
              border: 0;
            `
        }
    }
  }
`;

export default border;
