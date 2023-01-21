export interface DropDownData { label: string; icon: JSX.Element, subMenu?: SelectInterface[] }

export interface KebabMenuProps {
    selectedId: string
    menuOptions: DropDownData[]
    data: any
    actionFunction?:Function;
    isSelected?: boolean
}

export interface SelectInterface{
    value:string,
    label:string
}

