import { useState,useEffect } from "react";

export const useFetch = (url) =>{
    const [data, setData]= useState(null)
    const [loading, setLoading] = useState(false) 

    useEffect(()=>{
        setLoading(true)
        const fetchData = async()=>{
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }
        fetchData()
        setLoading(false)
    }, [url])

    return {data, loading}
}