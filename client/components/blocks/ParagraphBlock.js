import classes from './ParagraphBlock.module.sass'


const ParagraphBlock = (data) => {
    const { title, text } = data
    return (
        <div className={classes.ParagraphBlock}>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </div>
    )
}

export default ParagraphBlock
