import React, { useState } from "react";
import { Panel } from "./element/Panel";
import styled, { keyframes } from "styled-components"

type ContentsBoardType = {
    title: string,
    contents: string,
}
export const ContentsBoard: React.FC<ContentsBoardType> = ({ title, contents }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => {
        setIsOpen(!isOpen);
    }
    return (<Panel>
        <TitleBar isOpen={isOpen}>
            <div>title</div>
            <CollapseButton onClick={onClick} isOpen={isOpen}>{isOpen ? "▲" : "▼"}</CollapseButton>
        </TitleBar>
        <div style={{overflowY: "hidden"}}><Contents isOpen={isOpen} lineSize={3}>{contents}</Contents></div>
    </Panel>)
}


const TitleBarStyle = styled.div<{isOpen: boolean}>`
    height: 30px;
    padding: 0px;
    padding-left: 10px;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    border-radius: 8px 8px 0 ${({isOpen}) => !isOpen ? "8px" : "0"};
    align-items: center;
    justify-content: space-between;
`
type TitleBarType = {
    children: React.ReactElement[],
    isOpen: boolean,
}
const TitleBar: React.FC<TitleBarType> = ({ children, isOpen}) => {
    return (<TitleBarStyle isOpen={isOpen}>
        {children}
    </TitleBarStyle>)
}

const StyledCollapseButton = styled.button<{ isOpen: boolean }>`
    width: 30px;
    height: 100%;
    text-align: center;
    border-radius: 0 8px ${props => !props.isOpen ? "8px" : "0"} 0;
    border: none;
`
type CollapseButtonType = {
    onClick: () => void,
    isOpen: boolean,
    children: string,
}
const CollapseButton: React.FC<CollapseButtonType> = ({ onClick, isOpen, children }) => {
    return <StyledCollapseButton isOpen={isOpen} onClick={onClick}>{children}</StyledCollapseButton>
}

const StyledContents = styled.div<{ isOpen: boolean, lineSize: number }>`
    margin-bottom: ${({ isOpen, lineSize }) => isOpen ? "0px" : `-${lineSize + 1}em`};
    padding: ${({ isOpen }) => isOpen ? "10px" : "0"};
    padding-left: 10px;
    padding-right: 10px;    
    height: ${({ isOpen }) => isOpen ? "100%" : "0"};
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
`;
type ContentsType = {
    deadline?: Date,
    priority?: number,
    children: string,
    isOpen: boolean,
    lineSize: number,
};
const Contents: React.FC<ContentsType> = ({ deadline, priority, children, isOpen, lineSize }) => {
    return (<StyledContents isOpen={isOpen} lineSize={lineSize}>{children}</StyledContents>)
}