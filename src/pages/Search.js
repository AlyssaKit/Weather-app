import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { FaSearch } from 'react-icons/fa';
import moment from "moment";
import useReposSearch from '../hooks/getWeather'

const Card = styled.div`
    background-color: rgba(6, 16, 100, 0.792);
    backdrop-filter: blur(3px);
    border-radius: 7px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    margin: 10px;
    width: 250px;
`;

const CardContent = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    h3{
        font-size: 30px;
    }
`;

const AllCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    margin: 10px;
    padding: 10px;
    height: 100%;
`;

const Button = styled.button`
    border-radius: 5px;
    background-color: rgba(6, 16, 100, 0.692);
    box-shadow: 0 0 10px 0 ;
    backdrop-filter: blur 3px);
    border: none;
    color: white;
    padding: 10px;
    margin:5px;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Input = styled.input`
    border-radius: 5px;
    background-color: white);
    box-shadow: 0 0 10px 0 ;
    backdrop-filter: blur 3px);
    border: none;
    padding: 10px;
    margin:0px 5px 0px 5px;
`;
// text shadow code from https://www.w3schools.com/howto/howto_css_glowing_text.asp
const H1 = styled.h1`
    text-shadow: 0 0 10px #020113, 0 0 20px #17023d, 0 0 30px #1e034e, 0 0 40px #9597df, 0 0 50px #8f90db, 0 0 60px #ab8fe0, 0 0 70px #9fa0df;
    font-size: 50px;
    margin 0px 0px 0px 0px;
`;

const P = styled.p`
    font-size: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height:306px;
`;
// this is code based on code from the Github repo https://github.com/osu-cs494-w23/api-communication/blob/main/src/pages/Search.js

function Search({ query }) {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ inputQuery, setInputQuery ] = useState(searchParams.get("q") || query || "")
    const [ weather, loading] = useReposSearch(searchParams.get("q"))
    const [city, setCity ]= useState("")
    return (
        <div>
                <Header>
                    <H1>{city}</H1>
                </Header>
                <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
                setCity(inputQuery)
            }}>
                <Header>
                <div>
                    <Input
                        placeholder="Search for a City"
                        value={inputQuery}
                        onChange={e => setInputQuery(e.target.value)}
                    />
                </div>
                <Button>
                    <FaSearch/>
                </Button>
                </Header>
            </form>
            {loading && <P>Loading...</P>}
            {weather.length === 0 && !loading && <P>No results 
                                                </P>}
            <AllCards>
            {weather.length > 0 && (
                <>
                    {weather.map((card) => (
                    <Card key={card.dt}>
                        <CardContent>
                        <h3>{moment(card.dt_txt).format("h:mm a")}</h3>
                        <h4>{moment(card.dt_txt).format("dddd, MMMM Do YYYY")}</h4>
                        <img src={`http://openweathermap.org/img/w/${card.weather[0].icon}.png`} alt="weather icon" width="75"  />
                        <p className='p1'>{card.main.temp}°</p>
                        <p>L:{card.main.temp_min}° H:{card.main.temp_max}°</p>
                        <p>Probability of Precipitation: {(card.pop * 100).toFixed(0)}%</p>
                        <p>{card.weather[0].description}</p>
                        </CardContent>
                    </Card>
                    ))} 
                </>
                
            )}
            </AllCards>
            </div>
    )
} 


export default Search