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
        height: auto;
        &:hover {
            transform: scale(1.02);
            cursor: pointer;
        }
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
    position: relative;
    width: 50%;
    height: 50%;
    justify-content: center;
    align-items: center;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & iframe {
        width: 420px;
        height: 315px;
    }
`;