import { GetServerSideProps } from 'next'
import Dashboard from '../src/screens/Dashboard'
import { withSSRAuth } from '../src/utils/withSSRAuth'

export default Dashboard

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
    return {
      props: {}
    }
  })