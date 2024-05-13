const deleteFavoriteDispatcher = {
    deleteFavorite: (name, favorites) => {
        console.log(`Borrando... ${name}`);
        const newFavorites = favorites.filter((item) => item.name !== name);
        console.log(newFavorites);
        return newFavorites;
    }
}

export default deleteFavoriteDispatcher