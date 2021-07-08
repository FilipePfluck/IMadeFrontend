import {FormHandles} from '@unform/core'
import {Form} from '@unform/web'
import { format, getDate, getHours } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'

import Header from '../../components/Header'
import Proposal from '../../components/Proposal'
import { Order } from '../../types/Order'
import React, { useRef } from 'react'
import { useState } from 'react'
import api from '../../services/api'
import { useEffect } from 'react'
import { useAuth } from '../../contexts/authContext'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Button from '../../components/Button'
import { User } from '../../types/User'

interface Props {
    order: Order
    user: User
}

interface OfferData{
    price: string
    comment: string
}

const Details: React.FC<Props> = ({ order, user }) => {
    const [offers, setOffers] = useState([])

    const formRef = useRef<FormHandles>(null)

    const loadOffers = () => {
        api.get(`/offers/order/${order.id}`).then(response => {
            console.log(response.data)
            setOffers(response.data)
        })
    }

    const handleSubmit = async(data: OfferData) => {
        try{
            api.post('/offers',{
                provider_id: user.provider.id,
                order_id: order.id,
                price: Number(data.price),
                comment: data.comment
            }).then(response => {
                console.log('a')
            })
        }catch(err){

        }
    }

    const handleAcceptOrder = (provider_id: string, order_id: string) => {
        api.patch('/orders/acceptOrder', {
            order_id,
            provider_id
        }).then(response => {
            console.log(response.data)
        })
    }

    useEffect(()=>{
        loadOffers()
    },[])


    return(
        <S.Container>
            <Header shouldGoBack/>

            <S.Content>
                <S.Title>{order.title}</S.Title>

                <S.Info shouldBeBelow>
                    <strong>Descrição: </strong>
                    <p>{order.description}</p>
                </S.Info>
                <S.Info>
                    <strong>Dia: </strong>
                    <p>
                        {/* Sim, eu sei que isso é um erro de performance
                        e que eu deveria usar um useMemo, mas sem tempo irmao*/}
                        {format(new Date(order.date), 'PPP', {
                            locale: ptBR
                        })}
                    </p>
                </S.Info>
                <S.Info>
                    <strong>Horário: </strong>
                    <p>
                        {format(new Date(order.date), 'p', {
                            locale: ptBR
                        })}
                    </p>
                </S.Info>
                <S.Info>
                    <strong>Preço:</strong>
                    <p>R${order.min} - R${order.max}</p>
                </S.Info>

                {!user.user.is_provider && <>
                <S.Title style={{marginTop: 40}}>Propostas</S.Title>
                <S.Grid>
                    {offers.map(offer => (
                        <Proposal 
                            key={offer.id}
                            name={offer.provider.user.name}
                            stars={Number(offer.provider.score)} 
                            price={offer.price}
                            phone={offer.provider.user.phone_number}
                            comment={offer.comment}
                            onClickFunction={()=>handleAcceptOrder(offer.provider.id, offer.order.id)}
                        />
                    ))}
                    
                </S.Grid>
                </>}

                {user.user.is_provider && <>
                <S.Title style={{marginTop: 40}}>Fazer uma proposta</S.Title>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input
                        name="price" 
                        placeholder="Preço"
                        type="number"
                    />
                    <Textarea
                        name="comment"
                        placeholder="Comentário"
                    />
                    <Button type="submit">Enviar</Button>
                </Form>
                </>}
            </S.Content>
        </S.Container>
    )
}

export default Details