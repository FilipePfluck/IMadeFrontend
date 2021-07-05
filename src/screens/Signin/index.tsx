import React, {useRef, useCallback, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'
import * as yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import * as S from './styles'



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
    const formRef = useRef<FormHandles>(null)

    const { push } = useRouter()

    const { signIn } = useAuth()

    const handleSubmit = async (data: SignInFormData) =>{
        try{
            formRef.current?.setErrors({})

            const schema = yup.object().shape({
                email: yup.string()
                    .required('Preencha o email')
                    .email('Digite um email válido'),
                password: yup.string()
                    .required('Preencha a senha')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await signIn({
                email: data.email,
                password: data.password
            })

            push('/dashboard')
        }catch (err){
            if(err instanceof yup.ValidationError){
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)

                return
            }

            /* addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Não foi possível fazer login. Verifique as credenciais'
            }) */
        }
    }

    return (
        <S.Container>
            <S.Content>
                <S.AnimationContainer>
                    <h1>IMade</h1>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input 
                            name="email" 
                            placeholder="Email"
                            icon={FiMail}
                        />
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Senha" 
                            icon={FiLock}
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