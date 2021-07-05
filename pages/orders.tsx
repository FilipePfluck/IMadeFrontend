import { GetServerSideProps } from 'next'
import Orders from '../src/screens/Orders'
import { withSSRAuth } from '../src/utils/withSSRAuth'

export default Orders

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
    return {
      props: {}
    }
  })