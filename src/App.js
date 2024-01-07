import React from 'react'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Search from './pages/Search'
import Home from './pages/home'
import styled from '@emotion/styled'
import { FaHome, FaSearch, FaCloudMoon, FaCloudSun } from 'react-icons/fa';


const Navbar = styled.ul`
    list-style-type: none;
    overflow: hidden;
    background-color: rgba(6, 16, 100, 1);
    top: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
    z-index:1;
`

const Link = styled(NavLink)`
    background-color: rgba(6, 16, 100, 1);
    border-width: 0 4px 0 0;
    padding: 12px 30px 10px 30px;
    text-align: center;
    text-decoration: none;
    display: block;
    float: left;
    font-size: 25px;
    color: white;
    text-decoration: none;
    &:hover {
        background-color: lightblue;
        color: darkblue;
    }
`
const Footer = styled.div`
    background-color: rgba(6, 16, 100, 1);
    color: white;
    text-align: center;
    position: relative;
    left: 0;
    bottom: 0;
    padding: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
`
// text shadow code from https://www.w3schools.com/howto/howto_css_glowing_text.asp
const Title = styled.h1`
    float: right;
    font-size: 34px;
    color: white;
    text-decoration: none;
    border-width: 0 4px 0 0;
    padding: 5px 140px 0px 0px;
    margin: 1px 1px 1px 1px;
    font-style: italic;
    text-shadow: 0 0 10px #020113, 0 0 20px #17023d, 0 0 30px #340e75, 0 0 40px #9597df, 0 0 50px #9d9fe5, 0 0 60px #c5aff0, 0 0 70px #bfbff3;
`




function App() {
    return (
        <>
        <Navbar>
            <li ><Link to="/" className='Nav-But'><FaHome/></Link></li>
            <li ><Link to="/search" className='Nav-But'><FaSearch/></Link></li>
            <li ><Title><FaCloudSun/> 40-Cast <FaCloudMoon/></Title></li>
        </Navbar>
        <br />
        <br />
        <Routes>
            <Route
                path="/search"
                element={<Search />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <Footer>
            <p>40-Cast | Assignment 3 | Alyssa Kittle | kittlea@oregonstate.edu</p>
        </Footer>
        </>
    )
}

export default App