import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    width: 10rem;
    height: 10rem;
    flex-direction: column;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 0.3rem;
    box-shadow: 3px 9px 10px rgba(0, 0, 0, 0.15);
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const GraphWrapper = styled.div`
    display: flex;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 6px solid #2f299c;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
`;
