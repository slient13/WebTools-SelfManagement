import React, { useCallback, useEffect, useState } from "react";
import { Panel } from "./element/Panel";
import ControlSystem from "../lib/ControlSystem"

const controlSystem = new ControlSystem();

export const TextEditField = () => {
    return (<Panel width="90%" padding="5px">
        <TextField/>
    </Panel>)
}

const TextField = () => {
    const [text, setText] = useState<string>("TextEditField");
    const style: React.CSSProperties = {
        backgroundColor: `#2f2f2f`,
        height: `300px`,
        color: `#d9d9d9`,
        borderRadius: `0px`,
        padding: `5px`,
    }
    const onchange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setText(event.target.value);
    }
    return (<textarea style={style} onChange={onchange} value={text}>
    </textarea>)
}