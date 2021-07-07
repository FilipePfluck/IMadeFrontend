import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Orders from '../src/screens/Orders'
import { withSSRAuth } from '../src/utils/withSSRAuth'

export default Orders

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
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

    if(!parsedUser.provider){
      return {
        redirect: {
            destination: '/signIn',
            permanent: false
        }
      }
    }

    return {
      props: {}
    }
  })