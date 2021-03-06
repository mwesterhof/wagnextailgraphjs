import { renderBlock } from '../../componentLoader'


const ContentPage = ({title, body, footerContent}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>(ContentPage template)</p>

            {body.map(child => renderBlock(child)) }
            <hr /> <hr />
            <h3>footer</h3>
            {footerContent.map(child => renderBlock(child)) }
        </>
    )
}

export default ContentPage
