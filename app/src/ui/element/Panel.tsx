import React from "react";

type ChildrenType = string | React.ReactElement | boolean;
type PanelType = {
    width?: string,
    height?: string,
    backgroundColor?: string,
    display?: string,
    padding?: string,
    margin?: string,
    children?: ChildrenType | Array<ChildrenType>,
}
export const Panel: React.FC<PanelType> = ({
    width,
    height,
    backgroundColor,
    display,
    padding,
    margin,
    children
}) => {
    const style: React.CSSProperties = {
        width: (width ?? `300px`),
        height: (height ??`auto`),
        backgroundColor: (backgroundColor ?? `#d9d9d9`),        
        borderWidth: `2px`,
        display: (display ?? `flex`),
        flexDirection: `column`,
        padding: (padding ?? `0px`),
        margin: (margin ?? `5px`),
    }
    return (<div style={style}>
        {children}
    </div>)
}