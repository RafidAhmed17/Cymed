// ============= React Packages ===================

import {useEffect, useState} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); // If no response the true
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal,
                        method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                        },
            })
            .then(res =>{
                console.log(res);
                 if(!res.ok){
                    throw Error('Server not responding');
                }
                return res.json();
             })
            .then(data => {
                 setData(data);
                 setIsPending(false);
            })
            .catch(err => { // Catches any kind of network error 

                if(err.name === 'AbortError'){ // Every error has a name
                    console.log('Fetch Aborted');
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
                
            })
        }, 0);

    return () => abortCont.abort(); /*Aborts Fetch And returns the remaining data*/
    
}, [url]); 

return {data, isPending, error};

}
 
export default useFetch;