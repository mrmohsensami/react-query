import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export const RQSuperHeroes = () => {
    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data);
    };

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error);
    };
    const { data, isLoading, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

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
            {/* {data?.data.map((superhero) => {
                return <div key={superhero.id}>{superhero.name}</div>;
            })} */}
            {data?.map((heroName) => {
                return <div key={heroName}>{heroName}</div>;
            })}
        </>
    );
};

export default RQSuperHeroes;
