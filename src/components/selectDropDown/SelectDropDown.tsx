import * as React from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import SelectWrapper from './style'
import color from '../../theme/colors'
import { SelectProps } from './interface'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
      backgroundColor: color.black,
      color: color.white,
      border: '1px solid ' + color.borderBlue
    }
  }
}

 function SelectDropDown(props: SelectProps) {
  const { label, options, seletedItem, onChange,multiple=false } = props

  const upOptions = [...options]

  const isAllSelected = options.length > 0 && seletedItem.length === options.length

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value }
    } = event
    let changeVals: string[] = []
    if (value[value.length - 1] === 'all') {
      // setSelected(selected.length === options.length ? [] : options);
      changeVals =
      seletedItem.length === options.length ? [] : options.map(up => up.value)
    } else {
      changeVals = typeof value === 'string' ? value.split(',') : value
    }
    onChange(changeVals)
  }

  return (
    <SelectWrapper>
      <FormControl
        sx={{
          m: 1,
          width: 200,
          border: `1px solid ${color.borderBlue}`,
          borderRadius: '8px'
        }}
        title={seletedItem.join()}
      >
        <InputLabel
          variant="filled"
          id="demo-multiple-checkbox-label"
          sx={{
            color: color.blueGray,
            top: '-5px',
            fontSize: '13px'
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={multiple}
          value={seletedItem}
          onChange={handleChange}
          renderValue={selected => (
            <div style={{ marginTop: '11px', fontSize: '13px',    textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"}}>
              {selected.join(', ')}
            </div>
          )}
          MenuProps={MenuProps}
          sx={{
            background: color.black,
            color: color.white,
            height: '38px',
            borderRadius: '8px',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(228, 219, 233, 0.25)'
            },
            '.MuiSvgIcon-root ': {
              fill: `${color.white} !important`
            }
          }}
        >
          {multiple ?  (
            <MenuItem value="all">
              <input type="checkbox" checked={isAllSelected} />
              <ListItemText primary="all" />
            </MenuItem>
          ) : <MenuItem value="">
                <ListItemText primary="Clear" />
            </MenuItem>}
          {upOptions.map(selectItem => (
            <MenuItem key={selectItem.value} value={selectItem.value}>
              {Boolean(multiple) && (
                <input
                  type="checkbox"
                  checked={seletedItem.includes(selectItem.value)}
                />
              )}
              <ListItemText primary={selectItem.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectWrapper>
  )
}

export {SelectDropDown}
