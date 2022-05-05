import Image from 'next/image'

import classes from './HeroImageBlock.module.sass'


const HeroImageBlock = ({image}) => {
    return (
        <div className={classes.HeroImageBlock}>
            <h3>heroimageblock</h3>
            <Image
                src={image.renditions[0].url}
                width={300}
                height={300}
                alt={image.title}
            />
        </div>
    )
}

export default HeroImageBlock
