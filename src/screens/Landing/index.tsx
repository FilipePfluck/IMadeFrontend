import { useRouter } from 'next/router'
import Button from '../../components/Button'
import * as S from './styles'

export const Landing = () => {
    const { push } = useRouter()

    return(
        <S.Container>
            <h1>IMade</h1>
            <strong>Ajudamos prestadores de serviço a encontrar clientes</strong>
            <div>
                <Button onClick={()=>push('/signin')}>Entrar</Button>
                <Button onClick={()=>push('/signup')}>Cadastrar</Button>
            </div>
        </S.Container>
    )
}