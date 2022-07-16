import { useState, useEffect } from 'react';
import { getMovies } from '../api';
import { IMovies } from '../api/models/IMovies';
import MovieTag from './component/MovieTag';

const Main = () => {
    const [list, setList] = useState<IMovies>();
    useEffect(() => {
        const fetch = async () => {
        setList(await getMovies('1', 'a927bffea3d6b481e04ffdc4b30dbf1e'));
        }
        fetch();
    }, []);
    return (
        list ? (
            <>
            <div>{list.name}
            <div><img src={list.poster} alt='movies_poster' width={240}/></div>
            </div>
            <div>{list?.movies.length > 0 && list.movies?.map((movie, index) => (
                <MovieTag key={index} title={movie.title}/>
            ))}</div>
            </>
        ) : (
            <div>Loading...</div>
        )
    );
}
export default Main;