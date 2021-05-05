import React, {ButtonHTMLAttributes} from 'react'

import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean
}

const Button: React.FC<ButtonProps> = ({children, loading, ...rest}) => {
    return(
        <S.Container>
            <button type="button" {...rest}>
                {loading ? 'Carregando...': children}
            </button>
        </S.Container>
    )
} 

export default Button