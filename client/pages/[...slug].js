import { getMenu, getPageData, getPages } from '../lib/dataLoader'
import { getTemplate } from '../lib/componentLoader'
import Menu from '../components/Menu'
import Layout from '../components/Layout'


const getStaticProps = async(context) => {
    const { slug } = context.params
    const urlPath = '/' + slug.join('/')
    const pageData = await getPageData(urlPath)
    const inMenuPages = await getMenu()

    return {
        props: {
            urlPath: urlPath,
            pageData: pageData,
            inMenuPages: inMenuPages
        }
    }
}

export { getStaticProps }

const getStaticPaths = async() => {
    const pages = await getPages()
    const urlSegments = pages.map(page => page.urlPath.split('/').filter(element => element != ''))
    const paths = urlSegments.map(fullLine => {
        const line = fullLine.filter((element, i) => i != 0)
        return {
            params: {slug: line}
        }
    })
    const filtered = paths.filter(path => path.params.slug.length > 0)

    return {
        paths: filtered,
        fallback: false
    }
}

export { getStaticPaths }

const WagtailBasedPage = ({urlpath, pageData, inMenuPages}) => {
    if (!pageData) {
        return <p>Loading...</p>
    }

    const { title, contentType } = pageData
    const Template = getTemplate(contentType)

    return (
        <Layout>
            <Menu inMenuPages={inMenuPages} />
            <Template {...pageData} />
        </Layout>
    )
}

export default WagtailBasedPage
