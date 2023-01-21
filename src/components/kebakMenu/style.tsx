import { List } from "@mui/material";
import styled from "styled-components";
import color from "../../theme/colors";
import dimensions from "../../theme/dimensions";




const UserActionWrap = styled.div`
  border: 1px solid #0A1023;
  background-color: ${color.black};
  color: ${color.blue40};
  max-height: auto;
  ul {
    padding-top: 0px;
    padding-bottom: 0px;
    margin : 2px 0px;
    font-size: 16px;
    list-style-type: none;
    li span {
      margin-right: 8px;
    }
  }
`;

export const StyledList = styled(List)<{ disabled?: boolean }>`
  display: flex;
  pointer-events: ${props => (props.disabled ?? false) ? 'none' : 'auto'};
  flex-direction: row;
  align-items: center;
  color: ${color.font.secondary};
  padding-left: 0px;
  &:hover{
    color:${color.font.primary};
    .subMenuWrap{
      display: block !important;
    }
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0px 8px 12px;
`

export const SubmenuOptions = styled.div<{ disabled?: boolean }>`
  padding: 1px;
  cursor: ${props => (props.disabled ?? false) ? 'default' : 'pointer'};
  font-style: ${props => (props.disabled ?? false) ? 'italic' : 'normal'};
  
`

export const DropDownMenuItem = styled.div<{ disabled?: boolean }>`
  &:hover {
    color:${props=> (props.disabled ?? false)?  color.blue40: color.font.primary };
  }
  cursor: pointer;
  span {
    margin-right: 15px;
  }
`;

export const SubMenuWrap = styled.div`
  border-radius: ${dimensions.borderRadius};
  max-height: 290px;
  overflow-y: auto;
  width: auto;
  border: 1px solid ${color.borderBlue};
  background-color: ${color.black};
  color: ${color.blue40};
  ul {
    margin-left : 15px;
    font-size: 16px;
    list-style-type: none;
    padding-left: 0;
    li span {
      margin-right: 8px;
    }
  }
`;

export default UserActionWrap