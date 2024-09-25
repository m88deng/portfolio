import { styled } from "styled-components";

export const StyledProjectSection = styled.div`
    width: 100vw;
    height: 100%;

    background-image: -webkit-linear-gradient(top, #dbe4f0 0%, #d2def0 100%);

    /* background-color: #d2def0;     */
    padding: 6% 15% 8%;
`;

export const StyledProjectGrid = styled.div`
    padding-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`;

export const StyledProjectCard = styled.div`
    width: 100%;
    min-height: 100%;

    img{
        width: 100%;
        border-radius: 20px;
    }

    .projectCard{
        height: 100%;
        border: none;
        background-color: rgba(243, 243, 243, 0.75);
        border-radius: 20px;
    }
`;