import { DetailsWrapper, Close, Rank } from './styled';
import { ReactComponent as CloseBtn } from '../../close-btn.svg';
import { makeStyles, TextField } from '@material-ui/core';
const useStyles = makeStyles({
    overviewField: {
        color: 'white',
        overflowWrap: 'break-word',
        '&:not(.Mui-disabled)': {
            color: '#7367F0',
        },
    },
    textArea: {
        width: '90%',
    }
});
type Props = {
    title: string;
    overview: string;
    trailerKey?: string;
    rank?: number;
    handleCloseModal: () => void;
};
const MovieDetails = ({ title, overview, rank, trailerKey, handleCloseModal }: Props) => {
    const classes = useStyles();
    const rankColor = rank ? rank >= 8 ? 'green' : rank >= 6 ? 'yellowgreen' : rank >= 5 ? 'yellow' : 'red' : 'black';
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
        <Close><CloseBtn onMouseDown={handleCloseModal}/></Close>
        <Rank style={{ color: rankColor }}>{rank}</Rank>
        <TextField multiline value={overview} disabled={true} InputProps={{
        classes: {
            input: classes.overviewField
        }
        }}
        className={classes.textArea}/>
        </DetailsWrapper>
        ) : (
            <div>Loading...</div>
        )
    )
}

export default MovieDetails;