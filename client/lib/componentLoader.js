import { request } from 'graphql-request'
import PAGE from './queries/page'
import PAGES from './queries/pages'


const getTemplate = (fullName) => {
    const [appName, modelName] = fullName.split('.')

    const component = require(`./pages/${appName}/${modelName}.js`).default
    return component
}

export { getTemplate }


const getPageData = async(urlPath) => {
    const data = await request(
        "http://localhost:8000/graphql/",
        PAGE,
        {
            urlPath: urlPath
        }
    )

    return {
        pageData: data.page
    }
}

export { getPageData }


const getPages = async() => {
    const data = await request(
        "http://localhost:8000/graphql/",
        PAGES
    )

    return data.pages
}

export { getPages }


const renderBlock = (blockData) => {
    const { blockType, id } = blockData
    const Block = require(`./blocks/${blockType}.js`).default
    return <Block {...blockData} key={`${blockType}-${id}`} />
}

export { renderBlock }
