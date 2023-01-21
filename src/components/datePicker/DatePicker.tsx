import React from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

import { DateWrapper } from './style'

function CustomDatePicker(props: {
  date?: Date | null
  setDate?: Function
  selectsRange?: boolean
  startDate?: Date | null
  endDate?: Date | null
  setDateRange?: Function
}) {
  const {
    date = null,
    setDate = () => {},
    selectsRange = false,
    startDate = null,
    endDate = null,
    setDateRange = () => {}
  } = props
  let ele: JSX.Element = <></>
  if (!selectsRange) {
    ele = (
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          onChange={(date: Date | null) => {
            setDate(date)
          }}
          isClearable
          placeholderText="Select Date"
        />
    )
  }else{
    ele = (
      <DatePicker
      dateFormat="dd/MM/yyyy"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable
        placeholderText="Select Date Range"
      />
      
  )
  }
  return <DateWrapper themeName="black">{ele}</DateWrapper>
}

export { CustomDatePicker }
