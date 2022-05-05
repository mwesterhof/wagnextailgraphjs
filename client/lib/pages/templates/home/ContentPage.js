import { renderBlock } from '../../../../components/blocks/loader'

const ContentPage = (props) => {
    const { pageData } = props
    const { body, footerContent } = pageData

    return (
        <>
            <h1>{pageData.title}</h1>
            <p>ContentPage</p>

            {body.map(child => renderBlock(child)) }
            <hr /> <hr /> <hr />
            {footerContent.map(child => renderBlock(child)) }
        </>
    )
}

export default ContentPage
