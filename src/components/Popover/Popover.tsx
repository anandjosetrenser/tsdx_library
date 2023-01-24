import { useRef } from "react";

import IconButton from "@mui/material/IconButton";

import PopoverInterface from "./interface";
import { PopoverContent, PopoverWrapper } from "./style";
import React from "react";

function Popover(props: PopoverInterface) {
  const {
    children,
    icon,
    popoverContentStyle = {},
    iconColor = "",
    iconHoverColor = "",
    right = 0,
    top = 20,
    bottomTop = 0,
    iconWidth = "auto",
  } = { ...props };
  const iconRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);
  const handlePopoverOpen = () => {
    const scrollTop = (window.pageYOffset !== 0) || document.documentElement.scrollTop;
    const scrollLeft =
      (window.pageXOffset !== 0) || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(Number(scrollLeft), Number(scrollTop));
    };
    if ((iconRef.current != null) && (popupRef.current != null) && (colorRef.current != null)) {
      if (iconHoverColor !== "") {
        colorRef.current.style.color = iconHoverColor;
      }
      const rect = iconRef.current.getBoundingClientRect();
      popupRef.current.style.top = `${rect.top + top}px`;
      popupRef.current.style.left = `${rect.left + right - 5}px`;
      popupRef.current.style.display = "block";
      
      if (
        rect.left + right + Number(popupRef.current.offsetWidth) >
        window.innerWidth
      ) {
        console.log("enter")
        popupRef.current.style.left = `${
          rect.left - popupRef.current.offsetWidth + 10
        }px`;
      }

      if (
        rect.top + Number(popupRef.current.offsetHeight) >
        window.innerHeight
      ) {
        popupRef.current.style.top = `${
          rect.top - popupRef.current.offsetHeight + bottomTop
        }px`;
      }
    }
  };

  const handlePopoverClose = () => {
    if (iconColor !== "" && (colorRef.current != null)) {
      colorRef.current.style.color = iconColor;
    }
    if (popupRef.current != null) popupRef.current.style.display = "none";
    window.onscroll = () => {};
  };

  return (
    <PopoverWrapper
      onMouseLeave={handlePopoverClose}
      style={{ display: "inline-block", width: iconWidth }}
    >
      <span ref={iconRef} style={{ display: "inline-block", width: iconWidth }}>
        <IconButton
          sx={{
            textAlign: "left",
            margin: 0,
            padding: 0,
            width: iconWidth,
          }}
          size="small"
          onMouseEnter={() => handlePopoverOpen()}
        >
          <span
            style={{
              color: iconColor !== "" ? iconColor : "auto",
              width: iconWidth,
            }}
            ref={colorRef}
          >
            {icon}
          </span>
        </IconButton>
      </span>

      <PopoverContent ref={popupRef} style={popoverContentStyle}>
        {children}
      </PopoverContent>
    </PopoverWrapper>
  );
}

export {Popover}
