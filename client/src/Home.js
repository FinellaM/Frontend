const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center" style={{
                backgroundColor: '#cec9ff',
                backgroundImage: 'url("./hero_img.png")',// Original Image Source: Feel Good Drinks (@feelgooddrinks). 2020. “BUY NOW 10% OFF.” Instagram Photo, August 3, 2020. https://www.instagram.com/p/CDbO_EUHymK/.  Image modified by Group Mint.
                height: '100vmin',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="col-12 col-md-6 text-center">
                    <div>
                        <div>
                            Feel Good is a range of 100% natural, great tasting, fruitful sparkling waters in recyclable and plastic free packaging.
                        </div>
                        <div className="mt-5">
                            <a type="button" className="btn btn-light m-3">Shop Now</a>
                            <a type="button" className="btn btn-light m-3">About Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-12 text-center">
                    <h1><strong>Find Your Flavour</strong></h1>
                </div>
            </div>

            <div className="row m-auto">
                <div className="col-12 col-md-6 text-center">
                    <img className="splash-image mw-100" src="./peach_and_passionfruit_splash.png" alt="" />
                    <img className="drag-drop-image" src="./click_and_drag_icon.png" alt="" width="100px"/> {/*Original Image Sources: Coquet, Adrien. N.d. "Arrow." The Noun Project. Accessed June 18, 2021. https://thenounproject.com/term/arrow/1766473/.  AND Mokrane, Mourad. N.d. "Pointer." The Noun Project. Accessed June 18, 2021. https://thenounproject.com/term/pointer/153265/. Image modified by Group Mint*/}
                </div> 
                <div className="col-12 col-md-6">
                    <div className="mt-4 text-center">
                        <h2><strong>Peach & Passionfruit</strong></h2>
                    </div>
                    <div className="mt-4 text-center">
                        <h5>330ml</h5>
                    </div>
                    <div className="mt-4 text-center">
                        <h4><strong>From £4.50</strong></h4>
                    </div>
                    <div className="mt-4 text-justify">
                        <p>
                        We added a squeeze of real apple juice, natural peach & passionfruit flavours and a touch of maca to our British sparkling water to make a tongue-tingling drink you can enjoy anywhere; the perfect non-alcoholic pick-me-up! Stop, sip and give back. {/* Text Source: Feel Good Drinks. N.d. "Peach & Passionfruit." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/peach-passionfruit-12-x-330ml. */}
                        </p>
                    </div>
                    <div className="mt-2 text-center">
                        <a type="button" className="btn btn-light m-3">View Details</a>
                        <a type="button" className="btn btn-light m-3">Shop All</a>
                    </div>
                </div>
            </div>

            <div className="row m-auto">
                <div className="col-12 col-md-6 order-12 order-md-1">
                    <div className="mt-4 text-center">
                        <h2><strong>Raspberry & Hibiscus</strong></h2>
                    </div>
                    <div className="mt-4 text-center">
                        <h5>330ml</h5>
                    </div>
                    <div className="mt-4 text-center">
                        <h4><strong>From £4.50</strong></h4>
                    </div>
                    <div className="mt-4 text-justify">
                        <p>
                        Natural raspberry flavour, a squeeze of real apple juice plus a touch of hibiscus and ginseng is added to our British sparkling water, to create a delicious fruitful alternative to sugary carbonated drinks. Stop, sip and give back. {/* Text Source: Feel Good Drinks. N.d. "Raspberry & Hibiscus." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/raspberry-hibiscus-12-x-330ml. */}
                        </p>
                    </div>
                    <div className="mt-2 text-center">
                        <a type="button" className="btn btn-light m-3">View Details</a>
                        <a type="button" className="btn btn-light m-3">Shop All</a>
                    </div>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-12 text-center">
                    <img className="splash-image" src="./raspberry_and_hibiscus_splash.png" alt="" />
                    <img className="drag-drop-image" src="./click_and_drag_icon.png" alt="" width="100px"/> {/* Original Image Sources: Coquet, Adrien. N.d. "Arrow." The Noun Project. Accessed June 18, 2021. https://thenounproject.com/term/arrow/1766473/.  AND Mokrane, Mourad. N.d. "Pointer." The Noun Project. Accessed June 18, 2021. https://thenounproject.com/term/pointer/153265/. Image modified by Group Mint*/}
                </div>
            </div>

            <div className="row m-auto">
                <div className="col-12 col-md-6 text-center">
                    <img className="splash-image" src="./rhubarb_and_apple_splash.png" alt="" />
                    <img className="drag-drop-image" src="./click_and_drag_icon.png" alt="" width="100px"/> {/* Original Image Sources: Coquet, Adrien. N.d. "Arrow." The Noun Project. Accessed June 18, 2021. https://thenounproject.com/term/arrow/1766473/.  AND Mokrane, Mourad. N.d. "Pointer." The Noun Project. Accessed June 18, 2021. https://thenounproject.com/term/pointer/153265/. Image modified by Group Mint*/}
                </div>
                <div className="col-12 col-md-6">
                    <div className="mt-4 text-center">
                        <h2><strong>Rhubarb & Apple</strong></h2>
                    </div>
                    <div className="mt-4 text-center">
                        <h5>330ml</h5>
                    </div>
                    <div className="mt-4 text-center">
                        <h4><strong>From £4.50</strong></h4>
                    </div>
                    <div className="mt-4 text-justify">
                        <p>
                        Real apple juice and 100% natural rhubarb flavours infused with Echinacea makes our British sparkling water a delicious taste of the seasons and the ideal choice to refresh you any day of the year. Don't forget to chill it! Stop, sip and give back. {/* Text Source: Feel Good Drinks. N.d. "Rhubarb & Apple." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/rhubarb-apple-12-x-330ml. */}
                        </p>
                    </div>
                    <div className="mt-2 text-center">
                        <a type="button" className="btn btn-light m-3">View Details</a>
                        <a type="button" className="btn btn-light m-3">Shop All</a>
                    </div>
                </div>
            </div>

            <div className="row m-auto">
                <div className="col-12">
                    <div className="card m-auto w-75" style={{
                        boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                    }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 text-center mb-4">
                                    <h2 className="card-title">Our Mission</h2>
                                </div>
                                <div className="col-12 text-center mb-5">
                                    <p className="card-subtitle"><strong>We are a purpose driven brand on a mission to lead change from within the drinks industry.</strong></p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                </div>
                                <div className="col-6">
                                    <div className="row align-items-center mb-5">
                                        <div className="col-12" style={{ display: '-webkit-box' }}>
                                            <div className="row align-items-center">
                                                <img src="./dot_point.png" alt="" width="30px" height="auto" className="ml-4" />
                                            </div>
                                            <p className="card-text ml-5">Our ambitions may be big, but we are already the first soft drink in the UK to become Climate Positive.</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-5">
                                        <div className="col-12" style={{ display: '-webkit-box' }}>
                                            <div className="row align-items-center">
                                                <img src="./dot_point.png" alt="" width="30px" height="auto" className="ml-4" />
                                            </div>
                                            <p className="card-text ml-5">We have been awarded Planet Mark certification and are committed to being Carbon Net Zero by 2030. So far so good.</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-5">
                                        <div className="col-12" style={{ display: '-webkit-box' }}>
                                            <div className="row align-items-center">
                                                <img src="./dot_point.png" alt="" width="30px" height="auto" className="ml-4" />
                                            </div>
                                            <p className="card-text ml-5">In addition we have established our 3% For People and Planet Fun - giving 3% of sales to charities and non-profit organisations with shared values and actions.</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 text-center">
                                    <img src="./people_and_planet.png" alt="" className="w-50" /> {/* Image Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet */}
                                </div>
                                <div className="col-12">
                                    <hr style={{ borderTop: '2px solid #b8b8b8' }} />
                                </div>
                                <div className="col-6 text-center">
                                    <img src="./speech_bubble.png" alt="" className="w-50" /> {/* Original Image Source: John3. 2019. "Chat Oval Speech Bubbles Symbol Comments." Top PNG. https://toppng.com/chat-oval-speech-bubbles-symbol-comments-icon-chat-PNG-free-PNG-Images_234561. Image modified by Group Mint*/}
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12 text-center mb-3 mt-3">
                                            <p className="card-subtitle"><strong>As Ed Woolner, the man behind the brand says,</strong></p>
                                        </div>
                                        <div className="col-12">
                                            <p className="card-text ml-3">"We all know how precarious our planet's future is, how hard it is to protect and restore it, but we can have a positive impact - as custodians of the land, parents and consumers. With each choice we can make a difference and here at Feel Good we have the opportunity to support others with those choices too. That makes me very happy."</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mt-2 text-center">
                                        <a type="button" className="btn btn-light m-3">Find Out More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-auto">
                <div className="col-12">
                    <div className="mt-4 text-center">
                        <h2><strong>Join Us On Instagram!</strong></h2>
                    </div>
                    <div className="mt-4 mb-4 text-center">
                        <h5>@feelgooddrinks</h5>
                    </div>
                </div>
                <div className="col-2">

                </div>
                <div className="col-8">
                    <div className="row text-center">
                        <div className="col-6 col-md-3">
                            <img className="instagram-image mw-100" src="./logo192.png" alt="" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img className="instagram-image mw-100" src="./logo192.png" alt="" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img className="instagram-image mw-100" src="./logo192.png" alt="" />
                        </div>
                        <div className="col-6 col-md-3">
                            <img className="instagram-image mw-100" src="./logo192.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-2">

                </div>
            </div>
        </div>
    );
}

export default Home;