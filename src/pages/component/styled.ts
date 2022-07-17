import styled from 'styled-components/macro';

export const MovieWrapper = styled.div`
    min-width: 180px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
        max-width: 100%;
        &:hover {
            transform: scale(1.02);
            cursor: pointer;
        }
    }
    > * {
        margin-top: 55px;
    }
`;

export const Title = styled.div`
    font-weight: 400;
    font-style: oblique;
    &:hover {
        font-weight: 500;
        cursor: pointer;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    height: 50%;
    background-color: black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & iframe {
        width: 420px;
        height: 315px;
    }
`;

export const Close = styled.div`
    position:absolute;
    top:5px;
    right:5px;
    cursor: pointer;
`;

export const Rank = styled.div`
    position:absolute;
    top:15px;
    left:15px;
    width: 32px;
    height: 32px;    
    font-size: 1.2em;
    font-weight: bold;
    border-style: solid;
    border-width: thin;
    border-radius: 50%;
`;