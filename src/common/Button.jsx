import React from "react";
import styled, {css} from "styled-components";
import palette from "./palette";
import {Link} from "react-router-dom";

const SButton = css `
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${ (
    props
) => props.color === 'Cyan'
    ? palette.Cyan[5]
    : props.color === 'Indigo'
        ? palette.Indigo[5]
        : props.color === 'Violet'
            ? palette.Violet[5]
            : palette.Indigo[4]};
  &:hover {
    background: ${ (props) => props.color === 'Cyan'
                ? palette.Cyan[4]
                : props.color === 'Indigo'
                    ? palette.Indigo[4]
                    : props.color === 'Violet'
                        ? palette.Violet[4]
                        : palette.Indigo[7]};
  }
  ${ (props) => props.fullWidth && css `
      padding-top: 0.5rem;
      padding-bottom: 0.6rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  &:disabled {
    background: ${palette.Gray[3]};
    color: ${palette.Gray[8]};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button `
  ${SButton}
`;

const StyledLink = styled(Link)`
  ${SButton}
`;

const Button = (props) => {
    return props.to
        ? (<StyledLink {...props} color={props.color}/>)
        : (<StyledButton {...props}/>);
};

export default Button;