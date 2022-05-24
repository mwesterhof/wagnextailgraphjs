const getTemplate = (fullName) => {
    const [appName, modelName] = fullName.split('.')

    const component = require(`./pages/${appName}/${modelName}.js`).default
    return component
}

export { getTemplate }

const renderBlock = (blockData) => {
    const { blockType, id } = blockData
    const Block = require(`./blocks/${blockType}.js`).default
    return <Block {...blockData} key={`${blockType}-${id}`} />
}

export { renderBlock }
