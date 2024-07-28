import axios from 'axios';
import React, { useEffect, useState } from 'react'


const API_KEY=process.env.REACT_APP_API_KEY;
// const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const Usegif = (tag) => {

    const [gif,setGif]=useState('');
    const [loading, setLoading]=useState('false');

    
    async function fetchData(tag){
        setLoading(true);
        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);//return promise also
        // console.log(output);
        const imageSrc=data.data.images.downsized_large.url;
        // console.log(imageSrc);
        setGif(imageSrc);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData('car');
    },[])


return{
    gif,
    loading,
    fetchData
}
;

}

export default Usegif