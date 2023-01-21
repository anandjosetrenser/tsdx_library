import styled from "styled-components";
import color from "../../theme/colors";
import dimensions from "../../theme/dimensions";




export const PopoverContent = styled.div`
  border-radius: ${dimensions.borderRadius};
  background: ${color.black};
  border: 1px solid ${color.BlueDarkShade};
  background-color: ${color.black};
  color: ${color.blue40};
  width: 190px;
  max-height: 325px;
  overflow-y: auto;
  position: fixed;
  top: -15px;
  left: 0;
  z-index: 100000;
  text-align: left;
  display: none;
  white-space: break-spaces;
  padding: 20px 21px 21px 20px;
`;


export const PopoverWrapper = styled.div``;
