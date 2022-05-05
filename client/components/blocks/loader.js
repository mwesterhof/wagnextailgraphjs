const renderBlock = (blockData) => {
    const { blockType, id } = blockData
    const Block = require(`./${blockType}.js`).default
    return <Block {...blockData} key={`${blockType}-${id}`} />
}

export { renderBlock }
