import styled from 'styled-components/macro';

export const HeaderWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const MoviesWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    gap: 1rem 2rem;
`;

export const Navigation = styled.div`
    margin: 5px 4px 0 4px;
    color: blue;
    cursor: pointer;
`;

export const Title = styled.div`
    max-width: 240px;
    font-weight: bold;
    overflow: visible;
    white-space: nowrap;
    & span {
        margin-left: -100%;
        margin-right: -100%;
        text-align: center;
    }
    & img {
        max-width: 240px;
        height: auto;
    }
`;