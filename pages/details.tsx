import { GetServerSideProps } from 'next'
import Details from '../src/screens/Details'
import { withSSRAuth } from '../src/utils/withSSRAuth'

export default Details

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
    return {
      props: {}
    }
  })