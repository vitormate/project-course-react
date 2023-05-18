import styled from "styled-components";

export const GeneralContainer = styled.div`
    width: 1200px;
    display: flex;
    justify-content: ${props => props.start === 'start' ? 'flex-start' : 'space-between'};
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: ${props => props.column === 'column' ? 'column' : 'row'};
    height: ${props => props.minHeight === 'minHeight' ? '75%' : '0%'};
`;
