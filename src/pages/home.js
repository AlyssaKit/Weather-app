import React from "react";
import styled from '@emotion/styled'

const Div = styled.div`
    padding: 10px;
    height: 448px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 40px;
`;

const PageContent = styled.div`
    background-color: rgba(6, 16, 100, 0.792);
    backdrop-filter: blur(3px);
    border-radius: 7px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    float: center;
    width: 500px;
    height: 400px;

`;
const Home = () => {
    return (
        <Div>
            <PageContent>
            <h1>Home</h1>
            <h2 >Weather Forecast</h2>
            <p>Assignment 3</p>
            <p>Assigned by Rob Hess</p>
            <p >Created on the platform of VS</p>
            <p >Made By:</p>
            <p>ALYSSA KITTLE</p>
            <p>A simple search of a City's name and the next 5 day's "40-Cast" is ouputed in 3 hour segments (40 segments)</p>
            </PageContent>
        </Div>
    );
    }

export default Home;