import { useEffect, useState } from 'react'
import { API_KEY } from '../config.js'

// this is code built using code from the Github repo https://github.com/osu-cs494-w23/api-communication/blob/main/src/pages/Search.js

function useWeather (query) {
    const [ weather, setWeather ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        let ignore = false
        const controller = new AbortController();
        async function fetchWeatherResults() {
            setLoading(true);
            let responseBody = {};
            try {
                setError(false);
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=${API_KEY}`,
                    { signal: controller.signal }
                )
                if (response.status !== 200) {
                    console.log("== status:", response.status)
                    setError(true)
                } else {
                    setError(false)
                    responseBody = await response.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log("HTTP request cancelled")
                } else {
                    setError(true)
                    console.error("Error:", e)
                    throw e
                }
            }

            if (!ignore) {
                setWeather(responseBody.list || [])
                setLoading(false)
            }
        }
        if (query) {
            fetchWeatherResults()
        } else{
            setLoading(false)
            setWeather([])
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [ query ])
    console.log("== weather:", weather)
    return [ weather, loading, error ]
};

export default useWeather;