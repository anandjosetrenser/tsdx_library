/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DropDownData, KebabMenuProps, SelectInterface } from "./interface";
import UserActionWrap, {
  DropDownMenuItem,
  MenuWrapper,
  StyledList,
  SubmenuOptions,
  SubMenuWrap,
} from "./style";
import { FaArrowIosRight, FaMoreVertical } from "../../assets/icons/svgComponents";
import { Tooltip } from "../../common/style";
import {Popover} from "../Popover/Popover";
import color from "../../theme/colors";
import dimensions from "../../theme/dimensions";
import React from "react";

function MenuItem(props: { icon: JSX.Element; label: string }) {
  const { icon, label } = props;
  return (
    <div>
      <span style={{marginRight:"4px",marginTop:"8px",verticalAlign:"middle"}}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function KebabMenu(props: KebabMenuProps) {
  const { menuOptions, data, actionFunction, isSelected } = props;
  const isMenuDisabled = menuOptions.length === 0;

  const onClickMenu = (
    event: string,
    selectedStudy: unknown,
    hasSubMenu: boolean
  ) => {
    if (actionFunction !== undefined && !hasSubMenu) {
      actionFunction(event, selectedStudy);
    }
  };

  const onClickKebabSubMenu = (
    event: string,
    selectedStudy: unknown,
    selectedOption: SelectInterface
  ) => {
    if (actionFunction !== undefined) {
      actionFunction(event, selectedStudy, selectedOption);
    }
  };

  const getIconColor = () => {
    let iconColor = color.lightgray;

    if (isMenuDisabled) {
      iconColor = color.mercury;
    } else if (isSelected ?? false) {
      iconColor = color.font.primary;
    }
    return iconColor;
  };

  const iconHoverColor = () => {
    const iconHover = isMenuDisabled
      ? color.mercury
      : color.font.primary;
    return iconHover;
  };

  const getMenuPopoverStyle = (): React.CSSProperties => ({
    padding: "0",
    overflowY: "visible",
    width: isMenuDisabled
      ? "max-content"
      : `${dimensions.kebabMenu.maxWidth}px`,
    borderRadius: dimensions.borderRadius,
    height: "auto",
    maxHeight: "auto",
  });

  return (
    <Popover
      iconColor={getIconColor()}
      iconHoverColor={iconHoverColor()}
      icon={
        <FaMoreVertical />
      }
      popoverContentStyle={getMenuPopoverStyle()}
      right={-4}
      bottomTop={8}
    >
      {isMenuDisabled ? (
        <Tooltip>No Actions</Tooltip>
      ) : (
        <UserActionWrap style={{ borderRadius: dimensions.borderRadius }}>
          {menuOptions.map((menu: DropDownData, index) => (
            <StyledList
              key={menu.label + String(index)}
              onClick={() =>
                onClickMenu(menu.label, data, Boolean(menu.subMenu))
              }
            >
              <DropDownMenuItem>
                {menu.subMenu === undefined && (
                  <MenuWrapper style={{ width: "fitContent" }}>
                    <MenuItem icon={menu.icon} label={menu.label} />
                  </MenuWrapper>
                )}
              </DropDownMenuItem>
              {(menu.subMenu != null) && (
                <Popover
                  iconWidth="98%"
                  top={-5}
                  right={dimensions.kebabMenu.maxWidth}
                  bottomTop={45}
                  iconColor={getIconColor()}
                  iconHoverColor={iconHoverColor()}
                  icon={
                    <MenuWrapper>
                      <MenuItem icon={menu.icon} label={menu.label} />
                      <FaArrowIosRight />
                    </MenuWrapper>
                  }
                  popoverContentStyle={getMenuPopoverStyle()}
                >
                  <SubMenuWrap className="subMenuWrap">
                    {menu.subMenu.length > 0 ? (
                      <>
                        {menu.subMenu?.map((options, idx) => (
                          <StyledList
                            key={idx}
                            style={{ padding: "6px 8px" }}
                            onClick={() => {
                              onClickKebabSubMenu(menu.label, data, options);
                            }}
                          >
                            <SubmenuOptions
                              key={`${options.label}${String(idx)}`}
                            >
                              <DropDownMenuItem>
                                {options.label}
                              </DropDownMenuItem>
                            </SubmenuOptions>
                          </StyledList>
                        ))}
                      </>
                    ) : (
                      <StyledList disabled>
                        <SubmenuOptions disabled>
                          No Actions
                        </SubmenuOptions>
                      </StyledList>
                    )}
                  </SubMenuWrap>
                </Popover>
              )}
            </StyledList>
          ))}
        </UserActionWrap>
      )}
    </Popover>
  );
}

export {KebabMenu}
