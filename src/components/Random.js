import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';

const API_KEY=process.env.REACT_APP_API_KEY;

const Random = () => {

    // const [gif,setGif]=useState('');
    // const [loading, setLoading]=useState(false);


    
    // async function fetchData(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data}=await axios.get(url);//return promise also
    //     // console.log(output);
    //     const imageSrc=data.data.images.downsized_large.url;
    //     // console.log(imageSrc);
    //     setGif(imageSrc);
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    //call usehook
    const {gif,loading,fetchData}=Usegif();

    function clickHandler(){
        fetchData();
    }

  return (
    <div className=' w-1/2 bg-red-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className=' text-2xl font-bold underline uppercase mt-[15px]'>A Random Gifs</h1>

        {
            loading?(<Spinner/>):(<img src={gif} width={450}></img>)
        }


        

        <button 
        className='w-10/12 bg-slate-100 rounded-lg py-2 text-lg mb-[15px]'
        onClick={clickHandler}>
            Generate 
        </button>
    </div>
  )
}

export default Random