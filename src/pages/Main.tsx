import { useState, useEffect } from 'react';
import { getMovies } from '../api';
import { IMovies } from '../api/models/IMovies';
import MovieTag from './component/MovieTag';
import { MoviesWrapper, HeaderWrapper, Navigation, Title } from './styled';

const Main = () => {
    const token = 'a927bffea3d6b481e04ffdc4b30dbf1e';
    const [page, setPage] = useState(1);
    const [list, setList] = useState<IMovies>();
    useEffect(() => {
        const fetch = async () => {
        setList(await getMovies(page, token));
        }
        fetch();
    }, [page]);
    return (
        list ? (
            <>
                <HeaderWrapper>
                    <Navigation onMouseDown={page > 1 ? () => setPage(page-1) : ()=>{}}>previous</Navigation>
                    <Title><span>{list.name}</span>
                        <div><img src={list.poster} alt={list.name}/></div>
                    </Title>
                    <Navigation onMouseDown={() => setPage(page+1)}>next</Navigation>
                </HeaderWrapper>
                <MoviesWrapper>{list?.movies.length > 0 && list.movies?.map((movie, index) => (
                    <MovieTag key={index} movie={movie}/>
                ))}</MoviesWrapper>
            </>
        ) : (
            <div>Loading...</div>
        )
    );
}
export default Main;