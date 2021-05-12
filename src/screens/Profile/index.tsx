import React from 'react'

import * as S from './styles'

import {
    FiUser, 
    FiLock,
    FiCamera,
    FiMail
} from 'react-icons/fi'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Profile = () => {
    return(
        <S.Container>
            <Header shouldGoBack/>
            <S.Content>
                    <Form 
                        onSubmit={()=>{}} 
                    >
                        <S.AvatarInput>
                            <img 
                                src='https://isaojose.com.br/wp-content/uploads/2020/12/blank-profile-picture-mystery-man-avatar-973460.jpg'
                            />
                            <label htmlFor="avatar">
                                <FiCamera size={20} color="#FFF"/>
                                <input 
                                    type="file" 
                                    id="avatar" 
                                    onChange={()=>{}}
                                />
                            </label>

                            
                        </S.AvatarInput>


                        <h1>Meu Perfil</h1>

                        <Input 
                            name="name" 
                            placeholder="Nome"
                            icon={FiUser}
                        />
                        <Input 
                            name="email" 
                            placeholder="Email"
                            icon={FiMail}
                        />

                        <Input 
                            containerStyle={
                                {marginTop: 24}
                            }
                            name="old_password" 
                            type="password" 
                            placeholder="Senha atual" 
                            icon={FiLock}
                        />
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Nova senha" 
                            icon={FiLock}
                        />
                        <Input 
                            name="password_confirmation" 
                            type="password" 
                            placeholder="Confirmar senha" 
                            icon={FiLock}
                        />
                    
                        <Button type="submit" >Confirmar mudanças</Button>
                    </Form>
            </S.Content>
        </S.Container>
    )
}

export default Profile