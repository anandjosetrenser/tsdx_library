import React from 'react';

import { useEffect, useState } from 'react'
import { FaFieldClose } from '../../icons/svgComponents'

import colors from '../../theme/colors'
import { OnKeyDown, OnKeyPress } from '../../utils/keyEventHandler'
import { InputProps } from './interface'
import { ClearInput, Input, LabelWrapper, Wrapper } from './style'

// export interface InputInterface {
//   label: string
//   name: string
//   value: string
//   onChange: (val: string) => void
//   dataTestId?: string
//   type?: 'text' | 'number' | 'email'
//   autoComplete?: 'off' | 'on'
//   min?: string
//   clearOption?: boolean
//   disabled?: boolean
//   required?: boolean
// }

function FloatingInput(props: InputProps): JSX.Element {
  const {
    label,
    name,
    value,
    type = 'text',
    onChange,
    dataTestId = '',
    autoComplete = 'on',
    min = '0',
    clearOption = true,
    disabled = false
  } = props
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    if (value === '' || value === undefined) {
      return setHasValue(false)
    }
    return setHasValue(true)
  }, [value])

  const onChangeValue = (val: string) => {
    onChange(val)
    if (val === '' || val === undefined) {
      return setHasValue(false)
    }
    return setHasValue(true)
  }

  return (
    <Wrapper>
      <Input
        disabled={disabled}
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        data-testid={dataTestId}
        onChange={(event: { target: { value: string; }; }) => onChangeValue(event.target.value)}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          OnKeyPress(e, type)
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          OnKeyDown(e, type)
        }}
        min={min}
      />
      <LabelWrapper hasValue={hasValue}>{label}</LabelWrapper>
      {value !== '' && clearOption && (
        <ClearInput
          type="button"
          onClick={() => {
            onChangeValue('')
          }}
          style={{ color: colors.font.primary }}
        >
          <FaFieldClose />
        </ClearInput>
      )}
    </Wrapper>
  )
}

export {FloatingInput}
