import styled from "styled-components";

interface ButtonContainerProps {
  variant: "primary" | "secondary" | "danger" | "success";
}

const buttonVarians = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme["green-500"]};

  /* ${(props) => {
    return `background-color: ${buttonVarians[props.variant]}`;
  }} */
`;
