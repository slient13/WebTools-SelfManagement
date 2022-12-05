import React from "react";
import { BasicTags } from "./BasicTags";
import { SlideButton } from "../SlideButton.";
import { ContentsBoard } from "../ContentsBoard";
import { TextEditField } from "../TextEditField";

export const UITestField = () => {
    return (<>
        <SlideButton name="BasicTags" element={(<BasicTags />)} />
        <SlideButton name="ContentsBoard" element={(<ContentsBoard 
            title="testTitle"
            contents="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem voluptate"
        />)} />
        <SlideButton name="TextEditField" element={(<TextEditField />)} />
    </>)
}