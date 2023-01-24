import { SelectInterface } from "../kebakMenu/interface"

export interface SelectProps {
  label: string
  options: SelectInterface[]
  seletedItem: string[]
  onChange: Function
  multiple?:boolean
}
