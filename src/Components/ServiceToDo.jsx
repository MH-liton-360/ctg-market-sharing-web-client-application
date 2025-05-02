import logo_1 from "../assets/car_1.jpg"
import logo_2 from "../assets/car_2.jpg"
import logo_3 from "../assets/car_3.jpg"
import logo_4 from "../assets/auto-car-wash-logo-1.avif"
import logo_5 from "../assets/Fully-Automatic-Car-Wash-Machine.avif"
import logo_6 from "../assets/Car-washing-with-soap-and-brush.jpg"
import "../style/ServiceToDo.css"

const ServiceToDo = () => {
    return (
        <div>
            <header className="pt-15">


                {/* Banner Section */}
                <section className="Developer w-full">


                    <div className="Developer-title">
                        <h1 className="Developer-subtitle">"In future, Impact Automobiles."</h1>
                        <p className="Developer-subtitles">
                            <small>
                                The vast majority of us can’t even conceive of a world without cars. Whether you love them or hate them, use them often or occasionally, you likely have to admit that cars play a leading role in our lives. They have shaped our culture, our behavior; they have deeply changed our outlook on the world and marked our imagination. Countless songs, poems and books have been written about them. Road movies are the quest stories of today. Heroes, behind the wheel, are going on epic journeys across countries as well as within themselves, as if driving was some rite of initiation,  as if cars had some kind of answer, some kind of clue to the meaning of life.
                            </small>
                        </p>
                    </div>
                    <div className="Developer-btn p-2">
                        <a href="#footer-section">
                            <button className="btn btn-primary bg-amber-50 text-blue-700 btn  hover:bg-blue-700 hover:text-white transition-colors duration-300 rounded-xl">Contact With Me</button>
                        </a>
                    </div>
                </section>
            </header>

            <main>
                {/* Why Car Cleaning Section */}
                <section className="Web-development">
                    <div className="web">
                        <h3 className="web-title">Why Car Cleaning??
                        </h3>
                        <p className="web-subtitle">
                            <small>
                                Car cleaning is essential not only for appearance but also for preserving your vehicle’s value, performance, and longevity. Regular cleaning protects the paint, prevents rust, improves safety by keeping mirrors and lights clear, and creates a healthier, more enjoyable driving environment.
                            </small>
                        </p>
                    </div>

                    <div className="coding">
                        <div className="coding-container">
                            <h2 className="coding-title">"We Will Maintain Cars and Change the World"</h2>
                            <p className="coding-description">
                                <small>
                                    By delivering reliable car maintenance, we strive to create a safer, more sustainable future. From routine check-ups to advanced diagnostics, our goal is to reduce breakdowns, minimize environmental impact, and keep communities moving forward. Together, through care and precision, we can drive real change.
                                </small>
                            </p>
                            <a href="https://www.programming-hero.com/">
                                <button className="learn-btn">Learn more</button>
                            </a>
                        </div>
                        <div className="coding-image-container">
                            <img src={logo_1} className="rounded-2xl" alt="Coding" />
                        </div>
                    </div>

                    <div className="coding">
                        <div className="coding-image-container">
                            <img src={logo_2} className="rounded-2xl" alt="Web System" />
                        </div>
                        <div className="coding-containers">
                            <h2 className="coding-title">"We Will Help People by Creating Modern Cars"
                            </h2>
                            <p className="coding-description">
                                <small>
                                    Our mission is to design and build modern cars that are smarter, safer, and more sustainable. By integrating advanced technology, efficient design, and eco-friendly solutions, we aim to make transportation better for everyone—today and for the future.
                                </small>
                            </p>
                            <a href="https://www.w3schools.com/whatis/">
                                <button className="learn-btn">Learn more</button>
                            </a>
                        </div>
                    </div>

                    <div className="coding">
                        <div className="coding-container">
                            <h2 className="coding-title">"We Will Maintain Cars and Change the World"</h2>
                            <p className="coding-description">
                                <small>
                                    By delivering reliable car maintenance, we strive to create a safer, more sustainable future. From routine check-ups to advanced diagnostics, our goal is to reduce breakdowns, minimize environmental impact, and keep communities moving forward. Together, through care and precision, we can drive real change.
                                </small>
                            </p>
                            <a href="https://www.programming-hero.com/">
                                <button className="learn-btn">Learn more</button>
                            </a>
                        </div>
                        <div className="coding-image-container">
                            <img src={logo_3} className="rounded-2xl" alt="Coding" />
                        </div>
                    </div>
                </section>

                {/* Inspiration Section */}
                <section>
                    <div className="inspiration">
                        <h2 className="inspiration-title">Our Inspiration</h2>
                        <p className="inspiration-description">
                            <small>
                                That's a wonderful topic! The concept of "the inspiration of my life" refers to the events,
                                people, or experiences that have motivated and driven you to pursue your passions and
                                dreams.
                            </small>
                        </p>
                        <iframe width="960" height="550" src="https://www.youtube.com/embed/O_mMWidCScw?si=ly5YACa91pA217ug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </section>

                {/* Current Target Section */}
                <section className="my-current-target">
                    <div className="Current-target">
                        <h2 className="Current-target-title">Our Current Target</h2>
                        <p className="Current-target-description">
                            <small>
                                We are dedicated to advancing modern car care. Our current target is to educate and empower individuals with the knowledge and tools they need for proper car maintenance. From mastering basic cleaning to understanding complex systems, we aim to create a smarter, safer, and more sustainable driving experience.
                            </small>
                        </p>
                    </div>

                    <div id="current-Box-container">
                        <div className="Current-target-container">
                            <div>
                                <img src={logo_4} className="h-[48px] rounded-sm" alt="Car Washing" />
                                <h2>Car Washing</h2>
                                <p>
                                    <small>
                                        Car washing is a step-by-step process that begins with rinsing off loose dirt, followed by using the two-bucket method to safely clean the car from top to bottom. Special care is given to wheels using separate tools. After a thorough rinse, the car is dried with microfiber towels to prevent water spots, and optionally, a wax coating is applied for added protection and shine.
                                    </small>
                                </p>
                            </div>
                        </div>

                        <div className="Current-target-containers">
                            <div>
                                <img src={logo_5} className="h-[48px] rounded-sm" alt="Automatic Car Washing Machine" />
                                <h2>Automatic Car Washing Machine</h2>
                                <p>
                                    <small>
                                        An automatic car washing machine is a system designed to clean vehicles efficiently with minimal human intervention. It uses rotating brushes, high-pressure water jets, and soap dispensers to wash.These machines can complete a full wash cycle—pre-wash, foam application, scrubbing, rinsing, and drying—in just a few minutes, making them ideal for high-traffic service stations.
                                    </small>
                                </p>
                            </div>
                        </div>

                        <div className="Current-targets-container">
                            <div>
                                <img src={logo_6} className="h-[48px] w-[48px] rounded-sm" alt=" Car Washing Brush" />
                                <h2> Car Washing Brush</h2>
                                <p>
                                    <small>
                                        A car washing brush is a tool used for cleaning vehicles, typically designed with soft bristles to prevent scratching the car's surface. The brush is often used in both manual and automatic car washes to scrub dirt, grime, and debris from the vehicle's exterior, including hard-to-reach areas like the wheels and undercarriage.
                                    </small>
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceToDo;