const getStaticProps = async(context) => {
    const { slug } = context.params
    const urlPath = '/' + slug.join('/')

    return {
        props: {
            urlPath: urlPath
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
    const { urlPath } = props
    return (
        <>
            <h1>Wagtail page</h1>
            <p>foo: {urlPath}</p>
        </>
    )
}

export default WagtailBasedPage
