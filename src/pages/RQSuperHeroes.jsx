import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroes = () => {
    const { data, isLoading, isError, error } = useQuery('super-heroes', fetchSuperHeros);
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }
    return (
        <>
            <div>RQSuperheroes</div>
            {data?.data.map((superhero) => {
                return <div key={superhero.id}>{superhero.name}</div>;
            })}
        </>
    );
};

export default RQSuperHeroes;
