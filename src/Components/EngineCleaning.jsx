
import { Helmet } from "react-helmet-async";
import logo_1 from "../assets/car-engine-cleaning.jpg"

const EngineCleaning = () => {
    const backgroundStyle = {
        backgroundImage: "url('/src/assets/bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

        height: "400px",
    };


    return (
        <div>
            <Helmet>
                <title>Service || Engine Cleaning</title>
            </Helmet>
            <div className="pb-16">
                <h3 className="font-mono font-black text-4xl pt-12 py-2">The General History and Evolution of Car Washes</h3>
                <p> <span className="text-white  w-[32px] text-4xl bg-black rounded-sm">K</span> eep your car sparkling clean with our professional car wash services! We offer a range of options, from basic washes to detailed interior and exterior cleaning. Using high-quality products and equipment, we ensure a spotless finish every time. Visit us today and experience the difference!</p>

                <ul className="list-disc pl-6 text-black p-3">
                    <li>Specialized treatments like ceramic coatings.</li>
                    <li>They may also state their mission to provide the best car care services.</li>
                    <li>This can build trust and confidence in their services.</li>
                </ul>
                <p>More than just clean, we offer a car wash experience that protects your investment. Our gentle yet effective washes remove dirt, grime, and road salt, preventing damage and preserving your car’s shine. Choose from our various packages, including waxing and detailing, to keep your car looking its best.</p>
            </div>


            {/* Banner section */}
            <div className="flex rounded-3xl justify-between" style={backgroundStyle}>
                <div>
                    <img src={logo_1} className="h-[400px] rounded-3xl" alt="" />
                </div>
                <h2 className="text-white font-extrabold font-stretch-ultra-expanded text-5xl text-end mr-14 pt-44">Engine Cleaning</h2>
            </div>


            <div className="pb-8">
                <h3 className="font-mono font-black text-4xl pt-16 py-2">Cleaning an Engine: Do’s and Don’ts</h3>
                <p>A clean engine is not only aesthetically pleasing but also helps you spot potential issues more easily. This guide provides a comprehensive step-by-step approach to clean an engine, ensuring you do it safely and effectively.Cleaning your engine is easy for any DIYer as long as you follow some pretty important rules about protecting electrical connections. If you don’t know what you’re doing, you can screw things up royally. There are many components under the hood that can be damaged by degreasers and water.</p>
            </div>


            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center">Clean an Engine Step-by-Step</h2>

                <ol className="list-decimal list-inside space-y-6">
                    <li>
                        <p className="font-semibold">Start the engine and let it run until it’s warm.</p>
                        <p className="text-gray-300">That will soften the grease and help the degreaser to work faster.</p>
                    </li>

                    <li>
                        <p className="font-semibold">Remove the air filter box and intake duct.</p>
                        <p className="text-gray-300">Then, seal the throttle body with cling wrap and a rubber band.</p>
                    </li>

                    <li>
                        <p className="font-semibold">Wrap electrical connectors with cling wrap.</p>
                        <p className="text-gray-300">Wrap cling wrap around your alternator.</p>
                    </li>

                    <li>
                        <p className="font-semibold">Lay an oil-absorbing mat under the engine.</p>
                        <p className="text-gray-300">
                            Pig Mat is a product that absorbs oil and grease but sheds water, preventing pollution.
                            You can find it at any auto parts store.
                        </p>
                    </li>

                    <li>
                        <p className="font-semibold">Spray degreaser on the engine and around the engine compartment.</p>
                        <p className="text-gray-300">
                            Use a nylon brush to scrub the lightly soiled areas to remove dirt and oil residue.
                            Use a wire brush on heavily greased areas to speed up the dissolving process.
                            Repeat the degreaser application as the grease breaks down.
                        </p>
                    </li>
                </ol>
            </div>

        </div>
    );
};

export default EngineCleaning;
