import { useState, useEffect } from 'react';
import { url } from './postData';

const fetchData = () => {

    const [people, setPeople] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();

        //setTimeout(() => {
            //url + "all"
            fetch(url, { signal: abortCtrl.signal })
                .then(res => {
                    if (res.status !== 200) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setLoading(false);
                    setPeople(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        // auto catches network / connection error
                        setLoading(false);
                        setError(err.message);
                    }
                })
        //}, 1000);

        // abort the fetch
        return () => abortCtrl.abort();
        
    }, [url])

    return { people, loading, error };
}

export default fetchData;