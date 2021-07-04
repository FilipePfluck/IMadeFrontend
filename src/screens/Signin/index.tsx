import React, {useRef, useCallback, useState } from 'react'
import Link from 'next/link'
//import { Link, useHistory } from 'react-router-dom'

import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'
//import * as yup from 'yup'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import * as S from './styles'

//import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {useAuth} from '../../contexts/authContext'
//import {useToast} from '../../context/ToastContext'

//import logoImg from '../../assets/logo.svg'

interface SignInFormData {
    email: string,
    password: string
}

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    const handleSubmit = async () => {
        await signIn({
            email,
            password
        })
    }

    return (
        <S.Container>
            <S.Content>
                <S.AnimationContainer>
                    <h1>IMade</h1>

                    <Form onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input 
                            name="email" 
                            placeholder="Email"
                            icon={FiMail}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Senha" 
                            icon={FiLock}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        
                        <Button type="submit" >Entrar</Button>
                    </Form>

                    <Link href="/signup" > 
                        <S.LinkContent>
                            <FiLogIn/>  
                            Criar conta
                        </S.LinkContent>
                    </Link>
                </S.AnimationContainer>
            </S.Content>
            <S.Background/>
        </S.Container>
    )
}

export default SignIn