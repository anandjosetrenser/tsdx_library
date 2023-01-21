import styled from 'styled-components';
import color from '../theme/colors';



export const Tooltip = styled.div`
  background-color: ${color.Blue130} !important;
  color: ${color.blue40} !important;
  padding: 2px 8px !important;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${color.Blue60};
  max-width: 25vw;
  width: max-content;
  white-space: break-spaces;
  text-align: left;
  word-break: break-all;
`;
