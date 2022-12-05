import React, { ReactElement, useState } from "react";

type SlideButtonProps = {
    name: string;
    element: ReactElement;
}

export const SlideButton : React.FC<SlideButtonProps> = ({name, element}) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => setIsOpen(!isOpen);
    name = name ?? "";
    return (<>
        <p><button onClick={onClick}>{!isOpen ? "open" : "close"}</button> {name}</p>
        {isOpen && element}
    </>)
}