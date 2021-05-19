import * as S from './styles'

import Header from '../../components/Header'
import Order from '../../components/Appointment'

const Orders = () => {
    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.Title>Pedidos na sua cidade</S.Title>
                <S.Grid>
                    <Order 
                        name="Cliente 1" 
                        day="8 de maio"
                        hour="16 horas"
                        provider="teste"
                    />
                    <Order 
                        name="Cliente 2" 
                        day="10 de maio"
                        hour="16 horas"
                        provider="teste"
                    />
                    <Order 
                        name="Cliente 3" 
                        day="9 de maio"
                        hour="14 horas"
                        provider="teste"
                    />
                </S.Grid>
            </S.Content>
        </S.Container>
    )
}

export default Orders