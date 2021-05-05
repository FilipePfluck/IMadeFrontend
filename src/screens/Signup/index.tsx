import React, { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
//import * as yup from 'yup'

import * as S from './styles'
import { 
    FiArrowLeft, 
    FiMail, 
    FiLock, 
    FiUser,
    FiPhone,
    FiMapPin
} from 'react-icons/fi'

//import api from '../../services/apiClient'
//import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'

//import { useToast } from '../../context/ToastContext'

//import logoImg from '../../assets/logo.svg'

interface SignUpData {
    name: string,
    email: string,
    password: string
}

const SignUp: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('client')

    /* const formRef = useRef<FormHandles>(null)
    const { addToast } = useToast()
    const history = useHistory()

    const handleSubmit = useCallback(async (data: SignUpData) =>{
        try{
            formRef.current?.setErrors({})

            const schema = yup.object().shape({
                name: yup.string()
                    .required('Nome obrigatório'),
                email: yup.string()
                    .required('Email obrigatório')
                    .email('Digite um email válido'),
                password: yup.string()
                    .min(6, 'No mínimo 6 dígitos')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await api.post('/users', data)

            addToast({
                type: 'succes',
                title: 'Cadastro realizado!',
                description: 'Você já pode fazer seu login!'
            })

            history.push('/')
        }catch (err){
            if(err instanceof yup.ValidationError){
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)

                return
            }

            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Não foi possível fazer o cadastro, tente novamente.'
            })
        }
    },[addToast, history]) */

    return (
        <S.Container>
            <S.Background/>
            <S.Content>
                <S.AnimationContainer>
                    <h1>IMade</h1>

                    <Form onSubmit={()=>{}}>
                        <h1>Faça seu cadastro</h1>

                        <S.SelectOption selectedOption={selectedOption}>
                                <strong 
                                    id="client"
                                    onClick={()=>{setSelectedOption('client')}}
                                >
                                    Sou cliente
                                </strong>
                                <strong 
                                    id="provider"
                                    onClick={()=>{setSelectedOption('provider')}}
                                >
                                    Sou prestador
                                </strong>
                        </S.SelectOption>

                        <Input 
                            name="name" 
                            placeholder="Nome"
                            icon={FiUser}
                        />
                        <Input 
                            name="phone" 
                            placeholder="Número de telefone" 
                            icon={FiPhone}
                        />
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
                        
                        {selectedOption === 'provider' && (
                            <Input 
                                name="city" 
                                placeholder="Cidade" 
                                icon={FiMapPin}
                            />
                        )}
                    
                        <Button type="submit" >Cadastrar</Button>
                    </Form>

                    <Link href="/signin"> 
                        <S.LinkContent>
                        <FiArrowLeft/>  
                        Voltar
                        </S.LinkContent>
                    </Link>
                </S.AnimationContainer>
            </S.Content>
        </S.Container>
    )
}

export default SignUp