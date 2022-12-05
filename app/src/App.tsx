import React, { useState } from 'react';
import { UITestField } from './ui/test/UITestField';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyler = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme === "light" ? `#d9d9d9` : `#333333`};
        color: ${(props) => props.theme === "light" ? "#000000" : "#d9d9d9"};
    }
    a {
        color: ${(props) => props.theme === "light" ? "#000000" : "#d9d9d9"};
    }
`

const ThemeButton = styled.button`    
    background-color: ${(props) => props.theme === "light" ? `#d9d9d9` : `#333333`};
    color: ${(props) => props.theme === "light" ? "#000000" : "#d9d9d9"};
`

export const App = () => {
    const [theme, setTheme] = useState<string>("light");
    const router = createBrowserRouter([
        {
            path: '/',
            element: (<>
                <h1>App</h1>
                <Link to="/ui-test">UI Test</Link>
            </>),
        },
        {
            path: 'ui-test',
            element: (<>
                <UITestField />
                <Link to="/">Home</Link>
            </>),
        },
    ])
    const changeTheme = () => {
        if (theme === "light") setTheme("dark")
        else setTheme("light");
    }
    return (<>
        <GlobalStyler theme={theme} />
        <ThemeButton onClick={changeTheme} theme={theme}>{theme}</ThemeButton>
        <RouterProvider router={router} />
    </>);
}