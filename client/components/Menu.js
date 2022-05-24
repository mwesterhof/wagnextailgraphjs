import Link from 'next/link'
import classes from './Menu.module.sass'


const Menu = ({inMenuPages}) => {
    return (
        <div className={classes.Menu}>
            <h2>menu</h2>
            <ul>
                {inMenuPages.map(page => (
                    <li key={page.id}>
                        <Link href={page.url}>
                            <a>{page.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu
