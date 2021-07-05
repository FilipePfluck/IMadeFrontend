import { GetServerSideProps } from 'next'
import Profile from '../src/screens/Profile'
import { withSSRAuth } from '../src/utils/withSSRAuth'

export default Profile

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (ctx) => {
    return {
      props: {}
    }
  })