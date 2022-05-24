import { request } from 'graphql-request'
import PAGE from './queries/page'
import PAGES from './queries/pages'
import MENU from './queries/menu'


const getPageData = async(urlPath) => {
    const data = await request(
        "http://localhost:8000/graphql/",
        PAGE,
        {
            urlPath: urlPath
        }
    )

    return data.page
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


const getMenu = async() => {
    const data = await request(
        "http://localhost:8000/graphql/",
        MENU
    )

    return data.inMenuPages
}

export { getMenu }
