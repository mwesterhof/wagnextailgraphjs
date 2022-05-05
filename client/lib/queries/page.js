import { gql } from 'graphql-request'


const PAGE = gql`
  query Fancy ($urlPath: String) {
    page (urlPath: $urlPath) {
      title
      contentType
      ...HomePage
      ...ContentPage
    }
  }
  fragment HomePage on HomePage {
    content {
      ...HeroImageBlock
      ...ParagraphBlock
    }
  }
  fragment ContentPage on ContentPage {
    body {
      ...ParagraphBlock
    }
    footerContent {
      ...ParagraphBlock
    }
  }
  fragment HeroImageBlock on HeroImageBlock {
    image {
      title
      renditions {
        url
      }
    }
  }
  fragment ParagraphBlock on ParagraphBlock {
    title
    text
  }
`

export default PAGE
