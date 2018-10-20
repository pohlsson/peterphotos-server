import {css} from 'styled-components';

const padding = css`
padding: 2em;
  ${props => {
      if(props.paddingLess) {
        return Array.isArray(props.paddingLess) ?
            props.paddingLess.map(direction => {
              switch (direction) {
                case 'left':
                  return css`
                    padding-left: 0;
                  `;
                case 'right':
                  return css`
                    padding-right: 0;
                  `;
                case 'top':
                  return css`
                    padding-top: 0;
                  `;
                case 'bottom':
                  return css`
                    padding-bottom: 0;
                  `;
                default:
                  return css`
                    padding: 0;
                  `;
              }
            })
          : css`
            padding: 0;
          `
      }
  }
}
`;

export default padding;
