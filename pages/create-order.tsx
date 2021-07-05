import { GetServerSideProps } from 'next'
import CreateOrder from '../src/screens/CreateOrder'
import { withSSRAuth } from '../src/utils/withSSRAuth'

export default CreateOrder

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
    return {
      props: {}
    }
  })