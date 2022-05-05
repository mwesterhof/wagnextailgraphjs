import { getPageData, getTemplate } from '../lib/pages/loader'


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
    return {
        paths: [],
        fallback: true
    }
}

export { getStaticPaths }

const WagtailBasedPage = (props) => {
    const { urlPath, pageData } = props
    if (!pageData) {
        return <p>Loading.../</p>
    }

    const { title, contentType } = pageData
    const Template = getTemplate(contentType)

    return (
        <>
            <h1>{title}</h1>
            <p>foo: {urlPath}</p>
            <Template pageData={pageData} />
        </>
    )
}

export default WagtailBasedPage
