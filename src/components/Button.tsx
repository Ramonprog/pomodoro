import { ReactNode } from "react";
import { ButtonContainer } from './Button.styles'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success',
    children: ReactNode,
}

export function Button({ variant = 'primary', children }: ButtonProps) {
    return (
        <ButtonContainer variant={variant}>
            {children}
        </ButtonContainer>
    )
}