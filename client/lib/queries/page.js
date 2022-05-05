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
      blockType
      ...HeroImageBlock
      ...ParagraphBlock
    }
  }

  fragment ContentPage on ContentPage {
    body {
      blockType
      ...ParagraphBlock
    }
    footerContent {
      blockType
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
