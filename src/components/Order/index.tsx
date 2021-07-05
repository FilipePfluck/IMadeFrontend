import React from 'react'

import * as S from './styles'

interface OrderProps{
    name: string
    description: string,
}

const Order: React.FC<OrderProps> = ({name, description}) => {
    return(
        <S.Container>
            <S.Information>
                <strong>{name}</strong>
                <p>{description}</p>
            </S.Information>
        </S.Container>
    )
}

export default Order