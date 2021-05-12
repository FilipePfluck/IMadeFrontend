import React from 'react'

import * as S from './styles'

interface OrderProps{
    name: string
    description: string,
    offers: number
}

const Order: React.FC<OrderProps> = ({name, description, offers}) => {
    return(
        <S.Container>
            <S.Information>
                <strong>{name}</strong>
                <p>{description}</p>

                <S.Offers>
                    <strong>Propostas:</strong>
                    <p>{offers}</p>
                </S.Offers>
            </S.Information>
        </S.Container>
    )
}

export default Order