import { styled } from "styled-components";

export const StyledProjectSection = styled.div`
    width: 100vw;
    height: 140vh;

    background-image: -webkit-linear-gradient(top, #dbe4f0 0%, #d2def0 100%);

    /* background-color: #d2def0;     */
    padding: 6% 15% 8%;
`;

export const StyledProjectCard = styled.div`
    width: 100%;
    padding-top: 2rem;

    img{
        width: 100%;
        border-radius: 20px;
    }

    .projectCard{
        border: none;
        background-color: rgba(243, 243, 243, 0.75);
        border-radius: 20px;
    }
`;