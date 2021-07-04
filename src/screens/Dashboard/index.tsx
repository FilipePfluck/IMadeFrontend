import React from 'react'

import Link from 'next/link'

import * as S from './styles'

import Header from '../../components/Header'
import Appointment from '../../components/Appointment'
import Order from '../../components/Order'
import Button from '../../components/Button'
import { useAuth } from '../../contexts/authContext'
import { useEffect } from 'react'

const Dashboard = ()=>{
    const { user } = useAuth()

    useEffect(()=>{
        console.log(user)
    },[user])

    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.Section>
                    <h2>Seus agendamentos</h2>
                    <S.List>
                        <Appointment
                            name="Faxina simples"
                            provider="prestador 1"
                            day="15 de Maio"
                            hour="16 horas"
                        />
                        <Appointment
                            name="Faxina média"
                            provider="prestador 2"
                            day="16 de Maio"
                            hour="16 horas"
                        />
                        <Appointment
                            name="Faxina completa"
                            provider="prestador 3"
                            day="17 de Maio"
                            hour="16 horas"
                        />
                    </S.List>
                </S.Section>
                <S.Section>
                    <h2>Seus pedidos</h2>
                    <S.List>
                        <Order 
                            name="Faxina mais que completa"
                            description="Uma faxina mais que completa"
                            offers={2}
                        />
                        <Order
                            name="Faxina absoluta"
                            description="Preciso dizer mais?"
                            offers={8}
                        />

                        <Link href="/create-order">
                            <Button>Criar novo pedido</Button>
                        </Link>
                    </S.List>
                </S.Section>
            </S.Content>
        </S.Container>
    )
}

export default Dashboard