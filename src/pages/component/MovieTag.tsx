import { useState } from 'react';
import { Modal, Backdrop, Fade, Tooltip } from '@mui/material';
import { IMovie } from '../../api/models/Imovie';
import { MovieWrapper, Title, ModalContainer } from './styled';
import { getMovieTrailer } from '../../api';
import MovieDetails from './MovieDetails';
type Props = {
    movie: IMovie;
};
const MovieTag = ({ movie }: Props) => {
    const token = 'a927bffea3d6b481e04ffdc4b30dbf1e';
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');

    const fetch = async () => {
        setTrailerKey(await getMovieTrailer(movie.id, token));
    }
    const handleOpen = () => {
        fetch();
        setIsModalOpened(true);
    }
    
    const handleCloseModal = () => {
        setIsModalOpened(false);
    }

return (
    <MovieWrapper>
        <Modal
        open={isModalOpened}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <Fade in={isModalOpened}>
          <ModalContainer>
            <MovieDetails title={movie.title} trailerKey={trailerKey} rank={movie.vote_average} handleCloseModal={handleCloseModal} overview={movie.overview}/>
          </ModalContainer>
        </Fade>
      </Modal>
    <Tooltip title={movie.overview}>
        <Title onMouseDown={handleOpen}>{movie.title}</Title>
    </Tooltip>
    <Tooltip
    title={movie.vote_average}
    placement='top'
    componentsProps={{
        tooltip: {
          sx: {
            width: '32px',
            height: '32px',
            lineHeight: '32px',
            borderRadius: '50%',
            fontSize: '1.2em',
            textAlign: 'center',
            bgcolor: 'dark.gray',
            color: 'yellow',
            '& .MuiTooltip-arrow': {
              color: 'common.black',
            },
          },
        },
      }}>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} onMouseDown={handleOpen}/>
    </Tooltip>
    </MovieWrapper>
);
}
export default MovieTag;