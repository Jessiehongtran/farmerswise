import fetch from 'isomorphic-unfetch';
import style from './page.module.scss'

const Page = ({ plants }) => 
    <div className={style.main}>
        {plants.map(plant => <div className={style.image} >
            <img src={plant.image} alt=""/>
            <p className={style.name}>{plant.name}</p>
        </div>)}
    </div>

Page.getInitialProps = () => {
    return {
        plants: [
            {
                name: "Kale",
                image: "https://specialtyproduce.com/sppics/7631.png"
            },
            {
                name: "Tomato",
                image: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg"
            },
            {
                name: "Green bean",
                image: "https://www.thespruce.com/thmb/H6rcvzKXl0lWGiCfRydTUxRMJUI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-green-beans-1403459-hero-530fc7f267ce44cf89415748b46d88b4.jpg"
            },
            {
                name: "Green bean",
                image: "https://www.thespruce.com/thmb/H6rcvzKXl0lWGiCfRydTUxRMJUI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-green-beans-1403459-hero-530fc7f267ce44cf89415748b46d88b4.jpg"
            },
            {
                name: "Okra",
                image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/981/articles/2018/02/growingokra-1000-1519306309.jpg"
            },
            {
                name: "Red Okra",
                image: "https://cdn.shopify.com/s/files/1/2550/8730/products/Okra_Red-Burgundy_on-plant-w-blossom_logo.progressive.jpg?v=1578326424"
            },
            {
                name: "Romain Lettuce",
                image: "https://www.gardeningknowhow.com/wp-content/uploads/2019/12/romaine.jpg"
            },
            {
                name: "Potato",
                image: "https://www.molbaks.com/wp-content/uploads/2020/04/banner-1-1200x565.jpg"
            },
            {
                name: "Carrot",
                image: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2015/11/carrot-companion-plants-2_mini.jpg"
            },
            {
                name: "Cucumber",
                image: "https://gardenerspath.com/wp-content/uploads/2017/04/grow-cucumber-FB.jpg"
            },
            {
                name: "Brocoli",
                image: "https://edge.bonnieplants.com/www/tiny/uploads/20200810204938/lieutenant-broccoli.jpg"
            },
            {
                name: "Black berry",
                image: "https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/blueberries_full_width.jpg"
            }
        ]
    }
}

export default Page;