import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero);
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
        // select: (data) => {
        //     const superHeroNames = data.data.map((superHero) => superHero.name);
        //     return superHeroNames;
        // },
    });
};

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient();

    return useMutation(addSuperHero, {
        // onSuccess: (data) => {
        //     // queryClient.invalidateQueries('super-heroes');
        //     queryClient.setQueriesData('super-heroes', (oldQueyData) => {
        //         return {
        //             ...oldQueyData,
        //             data: [...oldQueyData.data, data.data],
        //         };
        //     });
        // },
        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes');
            const previousHeroData = queryClient.getQueryData('super-heroes');
            queryClient.setQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, { id: oldQueryData?.data?.length + 1, ...newHero }],
                };
            });
            return { previousHeroData };
        },
        onError: (_err, _newTodo, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData);
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heroes');
        },
    });
};
