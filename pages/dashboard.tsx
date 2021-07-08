import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { withSSRAuth } from '../src/utils/withSSRAuth'

import Dashboard from '../src/screens/Dashboard'
import ProviderDashboard from '../src/screens/Provider Dashboard'
import { User } from '../src/types/User'

interface Props {
  user: User
}

export default function DashboardPage ({user}: Props){
  return user.user.is_provider ? (
    <ProviderDashboard/>
  ): (
    <Dashboard/>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = withSSRAuth(async (ctx) => {
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

  return {
    props: {
      user: parsedUser
    }
  }
})