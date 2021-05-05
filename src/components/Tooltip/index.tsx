  
import React from 'react'

import * as S from './styles'

interface TooltipProps {
    title: string
    className?: string
}

const Tooltip: React.FC<TooltipProps> = ({title, className="", children}) => {
    return(
        <S.Container className={className}>
            <span>{title}</span>
            {children}
        </S.Container>
    )
}

export default Tooltip