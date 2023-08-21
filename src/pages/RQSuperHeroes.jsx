import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroes = () => {
    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data);
    };

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error);
    };
    const { data, isLoading, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeros, {
        // cacheTime: 5000,
        // staleTime: 30000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchInterval: 2000, // polling interval
        // refetchIntervalInBackground: true,
        // enabled: false,
        onSuccess,
        onError,
    });
    if (isFetching) {
        return <h2>Fetching...</h2>;
    }
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }
    return (
        <>
            <div>RQSuperheroes</div>
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((superhero) => {
                return <div key={superhero.id}>{superhero.name}</div>;
            })}
        </>
    );
};

export default RQSuperHeroes;
