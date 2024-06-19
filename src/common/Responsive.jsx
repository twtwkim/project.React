import React from 'react';
import styled from 'styled-components';

const ResponsiveDiv = styled.div` 
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px){
        width: 768px;
    }
    @media (max-width: 786px){
        width: 100%; 
    } 
`
const Responsive = ({
    children,
    ...rest
}) => { // ...rest로 어떤 props든 받을 수 있다.
    return (
        <ResponsiveDiv {...rest}>
            {children}
        </ResponsiveDiv>
    );
};

export default Responsive;