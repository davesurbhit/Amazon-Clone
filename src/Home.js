import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        // BEM
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                
                <div className="home__row">
                    <Product id={ 48659784 } title={'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'} price={317.00} image={"https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"} rating={5} />
                    <Product id={ 18659735 } title={'Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)'} price={17776.00} image={'https://m.media-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg'} rating={4} />
                </div>

                <div className="home__row">
                    <Product id={ 27894653 } title={'Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device | 2021 release'} price={3999.00} image={"https://m.media-amazon.com/images/I/51-1DEGYWjS._SL1000_.jpg"} rating={4} />
                    <Product id={ 49683057 } title={'ASUS ROG G703 17.3 inches FHD 144Hz Gaming Laptop RTX 2080 8GB Graphics (Core i9-9980HK 9th Gen/32GB RAM/1TB SSHD + 3X 512GB PCIe SSD/Windows 10 Professional/Aluminum/4.70 Kg), G703GXR-EV078R"'} price={399990} image={"https://m.media-amazon.com/images/I/81wLT7uAchL._SL1500_.jpg"} rating={4} />
                    <Product id={ 19356784 } title={"Fossil Gen 5 Garrett Stainless Steel Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS, Music Storage and Smartphone Notifications - FTW4040 (46mm, Silver)"} price={20696.00} image={"https://m.media-amazon.com/images/I/814SLCMQhTL._UL1500_.jpg"} rating={4} />
                </div>

                <div className="home__row">
                    <Product id={ 52003482 } title={"LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"} price={48790.00} image={"https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"} rating={5} />
                </div>
                {/* <div className='home__row'>
                <Product id={ 27894652 } title={"Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device | 2021 release"} price={50000.00} image={"https://m.media-amazon.com/images/I/51-1DEGYWjS._SL1000_.jpg"} rating={4} />
                </div> */}
            </div>
        </div>
    )
}

export default Home
