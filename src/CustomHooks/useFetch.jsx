import {useEffect, useState} from "react";

export default function useFetch(url, options={}) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);


    useEffect(() => {

        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r=> r.json() ).then(data => {
            setData(data)
        }).catch((e) => setError(e)).finally(() => setLoading(false));


    }, [])

    // deuxième méthode du fetch

 /*   useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    ...options,
                    headers: {
                        'Accept': 'application/json; charset=UTF-8',
                        ...options.headers
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

*/
    return {isLoading: loading, errorMessage: error, data: data};
}