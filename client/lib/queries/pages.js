import { gql } from 'graphql-request'


const PAGES = gql`
  query {
    pages {
      title
      urlPath
    }
  }
`


export default PAGES
