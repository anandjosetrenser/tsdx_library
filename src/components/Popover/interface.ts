export default interface PopoverInterface{
    children:JSX.Element;
    icon?:JSX.Element;
    popoverContentStyle?:React.CSSProperties;
    iconColor?: string;
    iconHoverColor?: string;
    right?: number;
    top?:number;
    bottomTop?:number;
    iconWidth?:string;
}