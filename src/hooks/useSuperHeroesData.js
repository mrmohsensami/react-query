import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeros, {
        // cacheTime: 5000,
        // staleTime: 30000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchInterval: 2000, // polling interval
        // refetchIntervalInBackground: true,
        // enabled: false,
        onSuccess,
        onError,
        select: (data) => {
            const superHeroNames = data.data.map((superHero) => superHero.name);
            return superHeroNames;
        },
    });
};
