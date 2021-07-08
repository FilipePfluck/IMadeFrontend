import { GetServerSideProps } from 'next'
import Details from '../../src/screens/Details'
import {Order} from '../../src/types/Order'
import api from '../../src/services/api'
import { withSSRAuth } from '../../src/utils/withSSRAuth'
import { parseCookies } from 'nookies'
import { User } from '../../src/types/User'
import { parse } from 'path'

interface Props {
  order: Order,
  user: User
}

export default function DetailsPage({order, user}){
  return (
    <Details order={order} user={user}/>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = withSSRAuth(async (ctx) => {
  const id = String(ctx.params.id)

  const cookies = parseCookies(ctx)

  const user = cookies['imade.user']

  if(!user){
      return {
          redirect: {
              destination: '/signIn',
              permanent: false
          }
      }
  }

  const parsedUser = JSON.parse(user)

  const {data: order} = await api.get(`/orders/${id}`)

  console.log(order)

  return {
      props: {
        order,
        user: parsedUser
      }
    }
  })