import React from 'react'
import logo from './images/logo.svg'
import './Homepage.css'
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SupportIcon from '@mui/icons-material/Support';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';


function Homepage() {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" className='swiggy-logo'></img>
                <p className='location'>Chennai,Tamil Nadu,India</p>
                <p className='search'><SearchIcon />Search</p>
                <p className='offers'><LocalOfferIcon />Offers</p>
                <p className='help'><SupportIcon />Help</p>
                <p className='user'><AccountCircleIcon />Sign In</p>
                <p className='cart'><ShoppingCartIcon />Cart</p>
            </nav>
            <div>
                <div className='body'>

                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/tyqu6rd9oj70bx2ci1kw' alt='' className='food1' ></img>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rvkvloatuhihppomdoo6' alt='' className='food2'></img>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/fiftcnohfymwnoqoabes' alt='' className='food3'></img>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/nk3cmuhgwhg9lpsasoit' alt='' className='food4'></img>
                </div>

                <div className='main-body'>
                    <h2>Offers near you</h2>
                </div>

                <div className='restaurant'>
                    <div className='card-1'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dfadviukqdkladdlyrq9' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Brownie Heaven</h4>
                        <p className='category'>Deserts</p>
                        <div className='rtp'>
                            <p className='mark'>4.4</p>
                            <p className='time'>29 mins</p>
                            <p className='price'>200 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-2'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4qivuqyviy3la2xqufn' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>The Belgian Waffle & Co</h4>
                        <p className='category'>Deserts and Beverages</p>
                        <div className='rtp'>
                            <p className='mark'>3.9</p>
                            <p className='time'>30 mins</p>
                            <p className='price'>220 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-3'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qxgnmm8irjp30pkuvlyc' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Al faham</h4>
                        <p className='category'>South Indian,Arabian,Biriyani</p>
                        <div className='rtp'>
                            <p className='mark'>4.0</p>
                            <p className='time'>40 mins</p>
                            <p className='price'>350 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-4'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/m8xcrq2jfsjdrhpwem7y' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Meat & Eat</h4>
                        <p className='category'>Fried Chicken</p>
                        <div className='rtp'>
                            <p className='mark'>4.1</p>
                            <p className='time'>45 mins</p>
                            <p className='price'>280 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                </div>

                <div className='restaurant-2'>
                    <div className='card-1'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/umclu7oub0iffcyh2r7x' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>The Cake World</h4>
                        <p className='category'>Bakery,Deserts</p>
                        <div className='rtp'>
                            <p className='mark'>4.0</p>
                            <p className='time'>36 mins</p>
                            <p className='price'>250 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>30% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-2'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ztqtt6q0flo6crnjtzrb' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Juice Dudez</h4>
                        <p className='category'>Juices,Snacks,Deserts</p>
                        <div className='rtp'>
                            <p className='mark'>3.0</p>
                            <p className='time'>32 mins</p>
                            <p className='price'>300 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>10% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-3'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qjyhhmtviqyew2op6lnv' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>NYPFC Pizza</h4>
                        <p className='category'>Fast Food,Pizzas</p>
                        <div className='rtp'>
                            <p className='mark'>4.1</p>
                            <p className='time'>34 mins</p>
                            <p className='price'>350 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-4'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hy9lggmrkopip9k8jlp2' alt='' className='card1-img' style={{ width: '300px'}}></img>
                        <h4 className='restaurant-name'>Shree konar villas</h4>
                        <p className='category'>South Indian,Chettinad</p>
                        <div className='rtp'>
                            <p className='mark'>4.2</p>
                            <p className='time'>24 mins</p>
                            <p className='price'>380 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>40% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='main-body'>
                    <h2>Premium</h2>
                </div>

                <div className='restaurant-3'>
                    <div className='card-1'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hizhx1e0tceb2jgoku1n' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>KooX - Rooftop Asian Grill</h4>
                        <p className='category'>Asian,Pastas</p>
                        <div className='rtp'>
                            <p className='mark'>4.3</p>
                            <p className='time'>56 mins</p>
                            <p className='price'>₹3000 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>30% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-2'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uktwrl2h9szneb9fa2yp' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Ciclo Cafe</h4>
                        <p className='category'>Continental,Italian,Italian-American</p>
                        <div className='rtp'>
                            <p className='mark'>4.4</p>
                            <p className='time'>45 mins</p>
                            <p className='price'>₹1100 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>10% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: PARTY</p>
                        </div>
                    </div>
                    <div className='card-3'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ln4mxuxlb7pqmgxqsvlt' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Asia Kitchen</h4>
                        <p className='category'>Asian,Continental,Oriental</p>
                        <div className='rtp'>
                            <p className='mark'>4.3</p>
                            <p className='time'>53 mins</p>
                            <p className='price'>850 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYNEW</p>
                        </div>
                    </div>
                    <div className='card-4'>
                        <img src='https://b.zmtcdn.com/data/pictures/chains/5/70595/9b60e87fc9c1d60fbb4c2205ccdbd5ef.jpg?fit=around|300:273&crop=300:273;*,*' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Starbucks</h4>
                        <p className='category'>Beverages,Ice-Cream</p>
                        <div className='rtp'>
                            <p className='mark'>4.3</p>
                            <p className='time'>25 mins</p>
                            <p className='price'>400 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: CAFFINE</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className='main-body'>
                    <h2>What's New</h2>
                </div>

                <div className='restaurant-4'>
                    <div className='card-1'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/em7kdh3bkua06masxccz' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Lassi And Shakes</h4>
                        <p className='category'>Italian,Pizzas,Juices,Healthy food</p>
                        <div className='rtp'>
                            <p className='mark'></p>
                            <p className='time'>33 mins</p>
                            <p className='price'>₹160 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>10% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-2'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j8z8oayy3ihmuyaieczi' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Saro home food</h4>
                        <p className='category'>Biriyani</p>
                        <div className='rtp'>
                            <p className='mark'>--</p>
                            <p className='time'>39 mins</p>
                            <p className='price'>₹400 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-3'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lfotv7d6wlzpquq27atw' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Kelvin Scale Shakes</h4>
                        <p className='category'>Beverages,Ice Cream</p>
                        <div className='rtp'>
                            <p className='mark'>--</p>
                            <p className='time'>33 mins</p>
                            <p className='price'>₹250 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-4'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t91wihcidjevcn13iiry' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Fulkaas</h4>
                        <p className='category'>North Indian,Chinese,Snacks,Combo</p>
                        <div className='rtp'>
                            <p className='mark'>4.7</p>
                            <p className='time'>47 mins</p>
                            <p className='price'>₹300 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                </div>

                <div className='restaurant-5'>
                    <div className='card-1'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/luamryilnj4ij86j8efy' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Sandwich Corner</h4>
                        <p className='category'>Sandwich,Juices</p>
                        <div className='rtp'>
                            <p className='mark'></p>
                            <p className='time'>30 mins</p>
                            <p className='price'>₹140 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-2'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rksovzvy4dowzo4ixovh' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Saro home food</h4>
                        <p className='category'>Biriyani</p>
                        <div className='rtp'>
                            <p className='mark'>--</p>
                            <p className='time'>39 mins</p>
                            <p className='price'>₹400 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-3'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fpgtblk59g91seppbd12' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Kelvin Scale Shakes</h4>
                        <p className='category'>Beverages,Ice Cream</p>
                        <div className='rtp'>
                            <p className='mark'>--</p>
                            <p className='time'>33 mins</p>
                            <p className='price'>₹250 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-4'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i8ookpr1jjemy64xcstw' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Fulkaas</h4>
                        <p className='category'>North Indian,Chinese,Snacks,Combo</p>
                        <div className='rtp'>
                            <p className='mark'>4.7</p>
                            <p className='time'>47 mins</p>
                            <p className='price'>₹300 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='main-body'>
                    <h2>Vegetarian Options</h2>
                </div>

                <div className='restaurant-6'>
                    <div className='card-1'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jqsi6shzbr2ihlxypeo7' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Flipped by Cassandra</h4>
                        <p className='category'>Deserts</p>
                        <div className='rtp'>
                            <p className='mark'>3.8</p>
                            <p className='time'>37 mins</p>
                            <p className='price'>₹240 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>20% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-2'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o3564c061ad61jplxm4i' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Myilai's Restaurant</h4>
                        <p className='category'>Beverages,Snacks</p>
                        <div className='rtp'>
                            <p className='mark'>--</p>
                            <p className='time'>39 mins</p>
                            <p className='price'>₹150 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                    <div className='card-3'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mwpapcjydpz8zxbc8j3x' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Grind Coffee House</h4>
                        <p className='category'>Beverages,Ice Cream</p>
                        <div className='rtp'>
                            <p className='mark'>4.4</p>
                            <p className='time'>36 mins</p>
                            <p className='price'>₹100 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>35% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: TRYME</p>
                        </div>
                    </div>
                    <div className='card-4'>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/veecopsi2whlosnl2ycg' alt='' className='card1-img'></img>
                        <h4 className='restaurant-name'>Kulfi treat</h4>
                        <p className='category'>Ice Cream</p>
                        <div className='rtp'>
                            <p className='mark'>4.2</p>
                            <p className='time'>52 mins</p>
                            <p className='price'>₹200 for two</p>
                        </div>
                        <div className='discount-details'>
                            <p>50% Off</p>
                            <p className='bl'></p>
                            <p className='coupon'>Use Coupon: NEW</p>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <img src='https://entrackr.com/wp-content/uploads/2020/10/Swiggy.jpg' alt='' className='footer-img'></img>
                </div>

                <div className='footer-contents'>
                    <div className='contents'>
                        <p className='footer-title'>Company</p>
                        <p>Who we are</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Report Fraud</p>
                        <p>Contact</p>
                        <p>Investor Relations</p>
                    </div>
                    <div className='contents-1'>
                        <p className='footer-title'>For Foodies</p>
                        <p>Code of Conduct</p>
                        <p>Community</p>
                        <p>Blogger Help</p>
                        <p>Mobile Apps</p>
                    </div>
                    <div className='contents-3'>
                        <p className='footer-title'>For Restaurants</p>
                        <p>Add restaurant</p>
                        <p className='add-title'>For Enterprises</p>
                        <p>Zomato for work</p>
                    </div>
                    <div className='contents-4'>
                        <p className='footer-title'>For you</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Security</p>
                        <p>Site map</p>
                    </div>
                    <div className='contents-5'>
                        
                        <div className='selects'>
                            <select className='select'>
                                <option>
                                India</option>
                            <option>USA</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            </select>
                        
                        <select className='select1'>
                            <option>
                                English</option>
                            <option>Italian</option>
                            <option>Indonesian</option>
                            <option>Portuguese</option>
                        </select>
                        </div> 

                        <div className='social'>
                            <p className='footer-title1'>Social Icons</p>
                        <div className='icons'>
                                <a href='https://www.facebook.com/swiggy.in' alt='' target="_blank" className='fb' >
                                    <span><FacebookOutlinedIcon /></span>
                        </a>
                                <a href='https://www.instagram.com/swiggyindia' alt='' target="_blank" className='insta' >
                                    <span><InstagramIcon/></span>
                                </a>
                                <a href='https://twitter.com/swiggy_in?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' className='twitter' alt='' target="_blank" >
                                    <span><TwitterIcon/></span>
                                </a>
                        </div>
                        </div>

                        <div className='download'>
                            <p className='footer-title1'>Download Our App</p>
                            <div className='final'>
                            <p className='android'><AndroidIcon/></p>
                                <p className='apple'>
                                    <AppleIcon /> </p></div>
                        </div>

                    </div>

                    
                
                </div>

            </div>
        </div>
    )
}

export default Homepage