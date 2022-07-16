import { IMovies } from './models/IMovies';

export const getMovies = async (id: string, key: string) => {
    const list: IMovies = {
        name: '',
        poster: '',
        movies: []
    };
    await fetch(`https://api.themoviedb.org/3/list/${id}?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        list.name = data.name;
        list.poster = 'https://image.tmdb.org/t/p/w500/' + data.poster_path;
        list.movies = [...data.items];
    })
    .catch(e => console.log(e));
    return list;
}