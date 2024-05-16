import getSWAPI from './getSWAPIDispatcher';
import addFavoriteDispatcher  from './addFavoriteDispatcher';
import deleteFavoriteDispatcher from './deleteFavoriteDispatcher';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			character: {},

			species: [],
			specie: {},

			planets: [],
			planet: {},

			favorites: [],
			resources: ['people', 'species', 'planets']
		},
		actions: {
			getSWAPI: async (resource) => {
                try {
                        const result = await getSWAPI.get(resource);
						//console.log(result);
						const store = getStore();
                        setStore({...store, [resource]: result });
                        return result;
                } catch (error) {
                        console.error(`Error al obtener ${resource} de la API:`, error);
                        throw error;
                }
            },
            addFavorite: (name, uid, resource) => {
				const newFavorite = addFavoriteDispatcher.addFavorite(name, uid, resource);
				setStore({ favorites: [...getStore().favorites, newFavorite] });
				              
            },
            deleteFavorite: (name) => {
				const newFavorites = deleteFavoriteDispatcher.deleteFavorite(name, getStore(). favorites);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
