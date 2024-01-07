import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import styled from '@emotion/styled'
import myImagePath from './thunderstorm-3625405__480.jpg';

const WholeApp = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    height:auto;
    background-image: url(${myImagePath});
    margin: 0;
    background-repeat: no-repeat, repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 100%;
    width: 100%;
`;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <WholeApp>
                <App />
            </WholeApp>
        </BrowserRouter>
    </React.StrictMode>
    
)