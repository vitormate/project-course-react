import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #222;
    color: #fff;
    padding: 3em;
    text-align: center;
`;

export const Social = styled.ul`
    display: flex;
    /* gap: 1em; */
    justify-content: center;
    list-style: none;

    li {
        margin: 0 1em;
        font-size: 1.5em;
    }

    li:hover {
        color: #ffbb33;
        cursor: pointer;
    }
`;

export const TextFotter = styled.p`
    margin-top: 2em;

    span {
        font-weight: bold;
        color: #ffbb33;
    }
`;