import { renderBlock } from '../../componentLoader'


const HomePage = ({title, content}) => {
    return (
        <>
            <h1>HomePage</h1>
            {content.map(child => renderBlock(child))}
        </>
    )
}

export default HomePage
