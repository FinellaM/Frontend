import './aboutUs.css';

const AboutUs = () => {
    return (
        <div className="container-fluid">
              <div className="row mt-4 align-items-center">
                <div className="col-6 text-left">
                    <h1 className="pageTitle">About Us</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid black' }} />
                </div>
            </div>

            <div className="row m-auto align-items-center text-left">
                {/* Entire Page's Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                <div className="about-people-planet">
                    <h2 className="text-center">3% for People & Planet</h2> {/* Page section title */}
                    <div >
                        <p>At the beating heart of Feel Good is a mission to make this world a better place for everyone.</p>
                        <p>We wanted to vreate a brand that could give back to people AND the planet. Giving people a better choice about how they consume. That's why we created the 3% for People & Planet Fund. We donate 3% of our sales to charities that support personal and planetary wellbeing. Now that feels good, doesn't it?</p>
                        <h5>#FeelGoodMoments</h5>
                        <p style={{marginBottom:'0.125em'}}>We facilitate #FeelGoodMoments in partnerships with charities that align with our values of fostering communities, the environment and personal wellbering. The good news is we can help more people as Feel Good grows. Every can sold makes a difference.</p>
                        <p style={{marginBottom:'0.125em'}}>Feel Good employees get involved too. Every year they each work 4 days at the charities we have partnered with on #DoGoodMoments.</p>
                        <br></br>
                        <p><strong>So far this year the 3% People & Planet fund has donated over £10k to charity and we are excited to introduce you to the people we have been working with...</strong></p>
                    </div>
                </div>
                <div className="about-sea">
                    <div id="aboutSea-Title" className="row justify-content-center" style={{
                        backgroundImage: 'url("./sea_swish.png")',
                    }}>
                        <h2 className="text-center">Sea</h2> {/* Sub section title */}
                    </div> 
                    <div className="article">
                        <div className="row">
                            <div className="col-xl-5 gx-5 col-md-5 col-sm-6 ">
                                <div className="vidColumn">
                                    <img src="./seagrass_logo.png" alt="Project Seagrass illustration"/> {/* Feel Good Drinks. n.d. "[Project Seagrass Logo]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                    <video autoPlay loop muted playsInline className="col">
                                        <source src="./sea_animation.mp4" type="video/mp4" /> {/* Animation created by Group Mint. Based on: Feel Good Drinks. n.d. "[Seahorse Illustration]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                    </video>
                                </div>
                            </div>           
                            
                            <div className="col-xl-7 gx-7 col-md-7 col-sm-6">
                                <p><strong>Project Seagrass</strong> is a brilliant conservation initiative to restore lost ecosystems that absorb high levels of carbon. They are the forefront of societal change to enable the recognition, recovery and resilience of seagrass ecosystems globally - a crucial planetary life support. Marine conservation is a subject very close to Feel Good leader Ed Woolner's heart and one of his main objectives is to offset carbon via ocean and sea protection to restore ocean biodiversity and promote blue health. So this is a very special partnership.</p>
                                <p>Feel Good are joining forces with Project Seagrass to assist in their ocean marine restoration including programmes to rewild seagrass, invite them to speak directly to our community and financially contribute to a short film they have commission for the G7.</p>
                            </div>
                        </div>                        
                    </div>
                                
                </div>
                <div className="about-earth">
                    <div id="aboutEarth-Title" className="row justify-content-center" style={{
                        backgroundImage: 'url("./earth_swish.png")',
                    }}>
                        <h2 className="text-center">Earth</h2> {/* sub section title*/}
                    </div> 
                    <div className="article">
                        <div className="row">
                            <div className="col-xl-7 col-md-7 col-sm-6">
                                <p><strong>Planet Mark</strong> is a sustainability certification for every type of organisation which recognises continuous improvement, encourages action and builds an empoweres community of like-minded individuals making a world of difference. At Feel Good we are delighted to be part of this movement.</p>
                                <p>We have already committed to a net zero planet through our certification, will continue to build awareness of the challenges we face with climate change and will collaborate on events around G7 and COP26.</p>
                            </div>
                            <div className="col-xl-5 gx-5 col-md-5 col-sm-6">
                                <div className="vidColumn">
                                    <img className="planet-logo" src="./planet_mark_logo_min.png" alt="Project mark logo"/> {/* Feel Good Drinks. n.d. "[Planetmark Logo]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet.  */}
                                    <video autoPlay loop muted playsInline className="col">
                                        <source src="./earth_animation.mp4" type="video/mp4" /> {/* Animation created by Group Mint. Based on: Feel Good Drinks. n.d. "[Earth Illustration]." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet.  */}
                                    </video>
                                </div>
                            </div>
                        </div>
                            
                    </div>              
                                    
                </div>
                <div className="about-communities">
                    <div id="aboutComms-Title" className="row justify-content-center" style={{
                        backgroundImage: 'url("./communities_swish.png")',
                    }}>
                        <h2 className="text-center">Communities</h2> {/* sub section title */}
                    </div>
                    <div className="article">
                        <div className="row">
                            <div className="col-xl-5 gx-5 col-md-5 col-sm-6 ">
                                <div className="vidColumn">
                                    <img src="./wave_logo.png" alt="Project WAVE logo" className="wave-logo"/> {/* Feel Good Drinks. n.d. "[Wave logo]" Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                    <video autoPlay loop muted playsInline className="col">
                                        <source src="./communities_animation.mp4" type="video/mp4" /> {/* Animation created by Group Mint. Based on: Feel Good Drinks. n.d. "[Surfing Illustration]." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                    </video>
                                </div>
                            </div>
                            <div className="col-xl-7 col-md-7 col-sm-6">
                                <p><strong>The Wave</strong> is the first inland-surfing destination of its kind, where people of all ages, backgrounds and abilities can experience the joy of surfing and its physical and mental health benefites. 
                                Our Feel Good leader Ed, who has been surfing since he was 8 years old, is passionate about the power of blue health. He believes everyone should have access to this type of activity. It's not just about surfing. It's about getting back to nature, improving health and well-being, connecting with other people and having a lot of fun in the process!</p>
                                <p>Feel Good will be working with The Wave on their forthcoming social impact programme to help those who would not have the opportunity to experience surfing, will spread the word about the benefits of blue health and run a series of events and competitions.</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="man-behind-brand" style={{ borderTop: '2px solid #222222' }}> {/* Line to seperate page sections */}
                    <h2 className="text-center">The Man Behind The Brand</h2> {/* Page section title */}
                    <div>
                        <p className="text-center"><strong>We all have feel good moments. Mine is being in the sea. Whether it's swimming, surfing or sailing, either on my own or with my family and friends, it's exactly where I want to be.</strong></p>
                        <div className="row article">
                            <img src="./man_behind_brand.png" alt="Man behind the brand" className="col-lg-4 col-md-5 col-sm-6" /> { /* Feel Good Drinks (@feelgooddrinks). 2021. "This time of the year feels soooo good, doesn't it?" Instagram Photo, May 28, 2021. https://www.instagram.com/p/CPawuHAriI5/. */}
                            <div className="col-lg-8 col-md-7 col-sm-6 align-self-center">
                                <p>I was lucky that I knew this from an early age having moved to the Gower when I was 9. Living by the coast became an essential part of my wellbeing and so, at the age of 21, I chose to put the sea permanently at the centre of my world when I moved to West Dorset. It was one of the best decisions I ever made and has kept a balance throughout my life.</p>
                                <p>Getting in the water allows me to challenge myself in a variety of conditions and, by being present in the moment, it gives me space to think - often influencing some of life's big decisions. Like launching a purpossful brand, Feel Good Drinks.</p>
                            </div>
                        </div>
                        
                        <p className="text-center"><strong>Feel Good drinks are a range of 100% natural, great tasting, fruity sparkling waters that contain no nasty additives, added sugars or sweetners, making them a healthy choice for all.</strong></p>
                        <div className="row article">
                            <div className="col-lg-9 col-md-8 col-sm-8 align-self-center">
                                <p>So far so good but it's not enough to just think about what is inside the can, we must consider the can itself and the wider impact these products have on our environment. In our production of this drink we have wholeheartedly committed to becoming climate positive this year (2021) and net zero by 2023. In fact, we have already achieved the former and been awarded sustainability certification from the internationally revered Planet Mark. I am bursting with pride at the pioneering strides we are taking. And here's another reason why.</p>
                            </div>
                            <img src="./climate_positive.png" alt="climate positive archievement" className="col-lg-3 col-md-4 col-sm-4"/> {/* Feel Good Drinks (@feelgooddrinks). 2021. "Every one of us can make a positive difference in the fight against climate change." Instagram Photo, June 2, 2021. https://www.instagram.com/p/CPm9239L71_/.  */}
                        </div>
                        
                        <p className="text-center"><strong>We have established The Feel Good 3% People Planet Fund. It's out own way of giving back.</strong></p>
                        <div className="row article">
                            <video className="col-lg-4 col-md-5 col-sm-5" autoPlay loop muted playsInline>
                                <source src="./people_planet.mp4" type="video/mp4" /> {/* Animated by Group Mint. Original: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet.  */}
                            </video>
                            <div className="col-lg-8 col-md-7 col-sm-7">
                                <div>
                                    <p>The fund donates to, and partners with, charities that support personal and planetary wellbeing. We work with likeminded initiatives who are as committed to the natural world as we are. We all know how precarious our planet's future is, how hard it is to protect and restore it, but we can have a positive impact - as custodians of the land, parents and consumers. With each choice we can make a difference and here at Feel Good we have the opportunity to support others with those choices too. That makes me very happy.</p>
                                    <p>So what's your feel good moment? We would love to know. Come and join us on our epic journey and let's share our discoveries.</p>
                                </div>
                                <div>
                                    <p><strong>Ed</strong><br></br>
                                        The Man Behind The Brand.<br></br>
                                        #DoGood #BeGood #FeelGood #FeelGoodMoments
                                    </p>
                                </div>
                            </div>
                        </div>
                            
                    </div>

                </div>
                
                <div className="so-feel-good" style={{ borderTop: '2px solid #222222' }}> {/* Line to seperate page sections */}

                    <h2 className="text-center">So Far So Feel Good</h2> {/* Page section title */}
                    <div className="row article">
                        <img src="./speech_bubble_slim.png" alt="speech bubble" className="col-lg-3 col-md-3 g-1 col-sm-3" /> {/* Edited by Group Mint. Original: John3. 2019. "Chat Oval Speech Bubbles Symbol Comments." Top PNG. https://toppng.com/chat-oval-speech-bubbles-symbol-comments-icon-chat-PNG-free-PNG-Images_234561.  */}
                        <div className="col-md-9 col-lg-9 col-sm-9 text-left align-self-center">
                            <p>"Feel Good drinks have the vision and genuine commitment to becoming a regenerative business and I am really glad to see the changes that they have already started to make. It is a pleasure working with Ed and the team supporting their transformational journey."</p>
                            <p><strong>Marina Bradford</strong><br></br>
                                Sustainable Procurement Consultant (Bemari)</p>
                        </div>
                    </div>
                    <div className="text-left">
                        <p><strong>At Feel Good each decision we make is a big one because, before we think about the product, we think about the planet and the people. We are at the start of our sustainability journey and are constantly looking to improve our impact as we progress.</strong></p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <img src="./infographics_recycle.png" alt="recycling message" className="col-lg-4 col-md-4 col-sm-4" /> {/* Created by Group Mint. Using: Feel Good Drinks. N.d. "Every Can Counts." Issuu. Accessed June 20, 2021. https://issuu.com/feel-good-drinks/docs/feel_good_drinks_carbon_mission_possible_may2021_s?fr=sOTQ4ZjM2OTMzODU.  */}
                        <img src="./infographic_planetmark.png" alt="planet mark certification" className="col-lg-4 col-md-4 col-sm-4" /> {/* Created by Group Mint. Using: Feel Good Drinks. N.d. "[Planetmark Logo]." Issuu. Accessed June 20, 2021. https://issuu.com/feel-good-drinks/docs/feel_good_drinks_carbon_mission_possible_may2021_s?fr=sOTQ4ZjM2OTMzODU.  */}
                        <img src="./infographic_emissions.png" alt="emissions goal" className="col-lg-4 col-md-4 col-sm-4" /> {/* Created by Group Mint. Using: SVG Silh. N.d. "Measurement scales symbol democracy." Accessed June 20, 2021. https://svgsilh.com/image/311504.html.  */}
                    </div> 
                    <div className="row row-cols-2 g-4">
                        <div class="row justify-content-center">
                            <img className="col-lg-5 col-md-5 col-sm-5" src="./infographic_cans.png" alt="statistics on cans"/> {/* Created by Group Mint. Using: Vectoreps10. N.d. "Soda can icon line drink bottle symbol." Accessed June 20, 2021. https://www.vectorstock.com/royalty-free-vector/soda-can-icon-line-drink-bottle-symbol-vector-21087558.  */}
                            <img className="col-lg-5 col-md-5 col-sm-5" src="./infographic_rucksacks.png" alt="statistics on rucksacks and sleeping bags"/> {/* Created by Group Mint. Using: Ryabokon, Ivan. N.d. "Backpack Icon." 123rf. Accessed June 20, 2021. https://www.123rf.com/photo_64092223_stock-vector-backpack-icon-outline-illustration-of-backpack-vector-icon-for-web.html.  */}
                        </div>
                        <div class="w-100"></div>
                        <div class="row justify-content-center">
                            <img className="col-lg-5 col-md-5 col-sm-5" src="./infographic_co2.png" alt="statistics on Carbon dioxide offset"/> {/* Created by Group Mint. Using: Nexusby. N.d. "Co2 Carbon Dioxide Emissions." Shutterstock. Accessed June 20, 2021. https://www.shutterstock.com/image-vector/co2-carbon-dioxide-emissions-vector-icon-1432893998.  */}
                            <img className="col-lg-5 col-md-5 col-sm-5" src="./infographic_donation.png" alt="statistics on money donated to charity"/> {/* Created by Group Mint. Using: Surur, Akhmad Sobahus. N.d. "Charity Icon." Dreamstime. https://www.dreamstime.com/charity-icon-illustration-to-commemorate-international-day-design-template-vector-image194448732.   */}
                        </div>                                        
                    </div>
                </div>     
   
            </div>
            
        </div>
    );
}

export default AboutUs;