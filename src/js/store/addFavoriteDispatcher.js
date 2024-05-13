const addFavoriteDispatcher = {
    addFavorite: (name, uid, resource) => {
        const newFavorite = {
            name: name,
            id: uid,
            url: '/' + resource + '/' + uid,
            resource: resource
        };
        console.log('%cAñadir favorito....' + `${newFavorite.name}`, 'padding: 5px; background-color: purple; color: white');
        return newFavorite;
    }
};

export default addFavoriteDispatcher;
