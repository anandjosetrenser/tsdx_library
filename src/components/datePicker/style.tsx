import styled from 'styled-components';

import {themeNamesType} from "./interface"


const theme : {[key in themeNamesType]:any}= {
  "black": {
    borderColor: "#707070",
    headerBgColor: '#555555',
    headColor: '#fff',
    dateTextColor: '#fff',
    bobyBgColor: '#000',
    dateHoverColor: '#5f5f5f',
    selectedDateColor: '#5289b3',

    dateTextField: {
      borderColor: '#323b5c',
      bgColor: '#000',
      color: '#fff',
    },
  },
};

export const DateWrapper = styled.div<{ themeName?: themeNamesType }>`
  .react-datepicker{
    border:0;
  }
  .react-datepicker-wrapper {
    width: auto !important;
  }
  .react-datepicker__input-container {
    input {
      line-height: 2.7;
      border-radius: 8px;
      border: 1px solid ${(props)=> props.themeName !== undefined ? theme[props.themeName].dateTextField.borderColor : "auto"};
      background-color: ${(props)=> props.themeName !== undefined ? theme[props.themeName].dateTextField.bgColor : "auto"};
      color: ${(props)=> props.themeName !== undefined ? theme[props.themeName].dateTextField.color : "auto"};
      padding-left: 10px;
    }
  }

  .react-datepicker__header {
    // head bg
    border-radius: 0 !important;
    background-color: ${(props)=> props.themeName !== undefined ? theme[props.themeName].headerBgColor : "auto"};
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: ${(props)=> props.themeName !== undefined ? theme[props.themeName].headColor : "auto"};
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${(props)=> props.themeName !== undefined ? theme[props.themeName].dateTextColor : "auto"};
  }
  .react-datepicker__month-container {
    border: ${(props)=> props.themeName !== undefined ? `1px solid ${String(theme[props.themeName].borderColor)}` : "auto"};
    background: ${(props)=> props.themeName !== undefined ? theme[props.themeName].bobyBgColor : "auto"} !important;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    background: ${(props)=> props.themeName !== undefined ? theme[props.themeName].dateHoverColor : "auto"};
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background: ${(props)=> props.themeName !== undefined ? theme[props.themeName].selectedDateColor : "auto"};
  }
`;
