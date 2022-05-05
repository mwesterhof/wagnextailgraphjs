import { getPageData, getPages, getTemplate } from '../../lib/pages/loader'


const getStaticProps = async(context) => {
    const { slug } = context.params
    const urlPath = '/' + slug.join('/')
    const { pageData } = await getPageData(urlPath)

    return {
        props: {
            urlPath: urlPath,
            pageData: pageData,
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

    return {
        paths: paths.filter(path => path.params.slug),
        fallback: false
    }
}

export { getStaticPaths }

const WagtailBasedPage = (props) => {
    const { urlPath, pageData } = props
    console.log(urlPath)
    if (!pageData) {
        return <p>Loading...</p>
    }

    const { title, contentType } = pageData
    const Template = getTemplate(contentType)

    return (
        <Template pageData={pageData} />
    )
}

export default WagtailBasedPage
