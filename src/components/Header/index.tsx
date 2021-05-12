import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'
import { useTheme } from 'styled-components'

import * as S from './styles'

interface HeaderPRops {
    shouldGoBack?: boolean
}

const Header: React.FC<HeaderPRops> = ({shouldGoBack = false}) => {
    const { colors } = useTheme()
    const { back } = useRouter()

    return(
        <S.Header>
                <S.HeaderContent>
                    {shouldGoBack && 
                        <FiArrowLeft 
                            size={24} 
                            color={colors.subtitle} 
                            style={{marginRight: 16, cursor: 'pointer'}}
                            onClick={back}
                        />
                    }

                    <h1>IMade</h1>

                    <S.Profile>
                        <Link href="/profile">
                            <img 
                                src={'https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg'} 
                                alt='avatar'
                            />
                        </Link>
                    </S.Profile>
                </S.HeaderContent>
            </S.Header>
    )
}

export default Header