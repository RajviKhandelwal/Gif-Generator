import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';



const Random = () => {

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState("false");
    
    async function fetchData() {
      
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=ipysoHI1xGVKcZVrbsaIqpiyVD346n6N`;
        const {data} =  await axios.get(url);
        const imageSource = data.data.images.downsized_large.url; // this path is bcz of api response format
        setGif(imageSource);
        setLoading(false);

    }
    
    useEffect(() => { 
      fetchData();
    }, [])
    

    function clickHandler(params) {
        fetchData();
    }

  return (
    <div className='w-1/2 bg-green-500 gap-y-10  mt-[40px] rounded-lg border border-black flex flex-col items-center'>

        <h1 className='text-2xl underline uppercase font-bold mt-[10px]'>Random Gif</h1>

        {
            loading ? (<Spinner/>) : ( <img src={gif} alt="Random Gif"/> ) 
        }
       

        <button onClick={clickHandler} className='w-10/12 opacity-70 bg-white py-3 rounded-lg mb-[20px]'>
            Generate
        </button>

    </div>
  )

}

export default Random