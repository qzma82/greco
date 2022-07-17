import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;
    background-color: #cccccc;
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MoviesWrapper = styled.div`
    margin: auto;
    width: 50%;
    display: grid;
    grid-template-columns: 20rem 20rem 20rem;
    grid-gap: 1rem;
`;

export const Navigation = styled.div`
    margin: 5px 4px 0 4px;
    color: blue;
    cursor: pointer;
`;

export const Title = styled.div`
    font-weight: bold;
    & img {
        max-width: 240px;
        height: auto;
    }
`;