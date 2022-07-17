import { DetailsWrapper } from './styled';
type Props = {
    title: string;
    trailerKey?: string;
};
const MovieDetails = ({ title, trailerKey }: Props) => {
    return (
        trailerKey ? (
        <DetailsWrapper>
        <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={title + ' trailer'}
        />
        </DetailsWrapper>
        ) : (
            <div>Loading...</div>
        )
    )
}
export default MovieDetails;