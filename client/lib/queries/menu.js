import { gql } from 'graphql-request'


const MENU = gql`
  query {
    inMenuPages {
      title
      url
      id
    }
  }
`

export default MENU
