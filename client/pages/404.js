import { getMenu } from '../lib/dataLoader'
import Layout from '../components/Layout'
import classes from './ErrorPage.module.sass'
import Menu from '../components/Menu'


const getStaticProps = async(context) => {
    const inMenuPages = await getMenu()

    return {
        props: {
            inMenuPages: inMenuPages
        }
    }
}

export { getStaticProps }


const NotFound = ({inMenuPages}) => {
    return (
        <Layout>
            <Menu inMenuPages={inMenuPages} />

            <div className={classes.ErrorPage}>
                <div className={classes.container}>
                    <img src="https://http.cat/404" />
                </div>
            </div>
        </Layout>
    )
}

export default NotFound
