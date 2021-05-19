import * as S from './styles'

import Header from '../../components/Header'
import Proposal from '../../components/Proposal'

const Details = () => {
    return(
        <S.Container>
            <Header shouldGoBack/>

            <S.Content>
                <S.Title>Faxina absoluta</S.Title>

                <S.Info shouldBeBelow>
                    <strong>Descrição: </strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi minus perferendis nihil nulla ullam iusto optio necessitatibus voluptates magni debitis, quod tempore odit, fugit consequuntur eos aspernatur et minima.</p>
                </S.Info>
                <S.Info>
                    <strong>Dia: </strong>
                    <p>8 de Abril</p>
                </S.Info>
                <S.Info>
                    <strong>Horário: </strong>
                    <p>16 horas</p>
                </S.Info>
                <S.Info>
                    <strong>Preço:</strong>
                    <p>R$80,00 - R$200,00</p>
                </S.Info>

                <S.Title style={{marginTop: 40}}>Propostas</S.Title>

                <S.Grid>
                    <Proposal 
                        name="prestador 1" 
                        stars={3} 
                        price={100}
                        phone="51 00000000"
                        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident veniam praesentium rem. Optio laborum hic exercitationem qui nihil aliquid cumque sapiente laudantium? Dignissimos, sapiente. Assumenda, totam. Vitae, nesciunt fugiat!"
                    />
                    <Proposal 
                        name="prestador 2" 
                        stars={3} 
                        price={110}
                        phone="51 00000000"
                        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident veniam praesentium rem. Optio laborum hic exercitationem qui nihil aliquid cumque sapiente laudantium? Dignissimos, sapiente. Assumenda, totam. Vitae, nesciunt fugiat!"
                    />
                    <Proposal 
                        name="prestador 3" 
                        stars={4} 
                        price={100}
                        phone="51 00000000"
                        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident veniam praesentium rem. Optio laborum hic exercitationem qui nihil aliquid cumque sapiente laudantium? Dignissimos, sapiente. Assumenda, totam. Vitae, nesciunt fugiat!"
                    />
                    <Proposal 
                        name="prestador 4" 
                        stars={5} 
                        price={120}
                        phone="51 00000000"
                    />
                    <Proposal 
                        name="prestador 5" 
                        stars={3} 
                        price={100}
                        phone="51 00000000"
                        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident veniam praesentium rem. Optio laborum hic exercitationem qui nihil aliquid cumque sapiente laudantium? Dignissimos, sapiente. Assumenda, totam. Vitae, nesciunt fugiat!"
                    />
                </S.Grid>
            </S.Content>
        </S.Container>
    )
}

export default Details