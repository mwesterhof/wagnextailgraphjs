import { request } from 'graphql-request'
import PAGE from '../queries/page'

const getTemplate = (fullName) => {
    const [appName, modelName] = fullName.split('.')

    const component = require(`./templates/${appName}/${modelName}.js`).default;
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