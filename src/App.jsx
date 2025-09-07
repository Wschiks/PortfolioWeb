import './App.css'
import pijl from "./assets/pijl.png";
import projecten1 from "./assets/projecten1.png";
import projecten2 from "./assets/projecten2.png";
import projecten3 from "./assets/projecten3.png";



// pakt alle plaatjes uit de map met .svg stopt dat in de array en die loopen we

const images = import.meta.glob("/src/assets/*.svg", {eager: true});
const svgArray = Object.values(images).map(img => img.default);


function App() {
    return (
        <div>
            <div className="w-screen h-screen bg-blue-600 flex flex-col">
                {/* Top section */}
                <div className="h-1/5 bg-green-600 relative">
                    {/* Gapside content (always centered in the screen) */}
                    <div className="gapside bg-gray-500 h-full flex items-center justify-center tracking-[1rem] text-3xl">
                        <p className="text-white font">PORTFOLIO</p>
                    </div>

                    {/* Stripes (stick to the right side) */}
                    <div className="absolute top-0 right-0 h-full flex flex-row items-start space-x-[1.8vw] bg-gray-500 pr-6">
                        <div className="w-px h-32 bg-white"></div>
                        <div className="w-px h-42 bg-white"></div>
                        <div className="w-px h-55 bg-white"></div>
                        <div className="w-px h-66 bg-white"></div>
                        <div className="w-px h-77 bg-white"></div>
                        <div className="w-px h-88 bg-white"></div>
                        <div className="w-px h-95 bg-white"></div>
                        <div className="w-px h-100 bg-white"></div>
                    </div>
                </div>

                {/* Middle section */}

                    <div className="gapside bg-gray-400 flex flex-col h-2/3 justify-center leading-[22vh]">
                        <p className="text-[30vh] font text-white">SOFTWARE</p>
                        <p className="text-[30vh] font text-white flex justify-end">developer</p>
                    </div>

                {/* Bottom section */}
                <div className="flex justify-between items-end h-1/5">
                    {/* Stripes (left side) */}
                    <div className="flex flex-row items-center space-x-[1.8vw] pl-6 h-full">
                        <div className="w-px h-200 bg-white"></div>
                        <div className="w-px h-190 bg-white"></div>
                        <div className="w-px h-176 bg-white"></div>
                        <div className="w-px h-154 bg-white"></div>
                        <div className="w-px h-132 bg-white"></div>
                        <div className="w-px h-110 bg-white"></div>
                        <div className="w-px h-84 bg-white"></div>
                        <div className="w-px h-64 bg-white"></div>

                    </div>

                    {/* Gapside content (always centered) */}
                    <div className="gapside bg-gray-700">
                        {/* Your centered content here */}
                    </div>
                </div>
            </div>


            <div className="h-[33vh] w-full bg-black"></div>
            {/* Info Box */
            }
            <div>
                {/* Info 1 */}
                <div className="sticky top-0 h-screen w-screen bg-white flex justify-center z-10">
                    <div
                        className=" gapside h-1/3 flex items-center justify-between">

                        <div className="h-full aspect-square  flex items-center text-black ">
                            <div className="w-[50px] h-[110px] arimo text-4xl font-bold text-gray-300 "><p>01</p></div>
                            <p className="arimo text-7xl font-bold">Dit<br/>ben ik </p></div>
                        <div
                            className="h-full aspect-square w-[calc(+35%)]  flex items-center justify-center text-black">
                            <p className="arimo text-xl font-thin">Ik ben Wout, een developer die alles leuk vindt van
                                front-end tot back-end en van software tot robotica. Ik combineer creativiteit met
                                techniek om projecten tot leven te brengen.</p></div>

                    </div>
                </div>

                {/* Info 2 */}
                <div className="sticky top-[33vh] h-[66vh] w-screen bg-gray-100 flex justify-center z-20">
                    <div
                        className=" gapside h-1/2 flex items-center justify-between">
                        <div className="h-full aspect-square  flex items-center text-black ">
                            <div className="w-[50px] h-[110px] arimo text-4xl font-bold text-gray-300 "><p>02</p></div>
                            <p
                                className="arimo text-7xl font-bold">Ik bouw<br/>dingen </p></div>
                        <div
                            className="h-full aspect-square w-[calc(+35%)]  flex items-center justify-center text-black">
                            <p className="arimo text-xl font-thin">Van concept tot live: ik zorg dat websites en apps
                                werken én er strak uitzien. Mijn projecten variëren van kleine prototypes tot volledige
                                webapplicaties.</p></div>

                    </div>
                </div>

                {/* Info 3 */}
                <div className="sticky h-[33vh] w-screen bg-black flex justify-center z-30">
                    <div
                        className=" gapside h-full flex items-center justify-between">
                        <div className="h-full aspect-square  flex items-center text-white ">
                            <div className="w-[50px] h-[110px] arimo text-4xl font-bold text-gray-300 "><p>03</p></div>
                            <p
                                className="arimo text-7xl font-bold">Altijd<br/>scherp </p></div>
                        <div
                            className="h-full aspect-square w-[calc(+35%)]  flex items-center justify-center text-white">
                            <p className="arimo text-xl font-thin">Nieuwe tools, trends en uitdagingen houden mij
                                scherp. Ik blijf leren en verbeteren, zodat mijn werk toekomstbestendig en effectief
                                is.</p></div>

                    </div>
                </div>
            </div>

            {/*Projecten*/
            }
            <div className="h-[80vh] bg-black flex items-center justify-center ">
                <h1 className="text-3xl font-bold text-white">projecten</h1>
            </div>

            <div className="h-screen w-screen bg-black flex items-center justify-center  flex-col">

                <div className="gapside h-1/3  flex items-center justify-between">
                    <div className=" h-[90%] w-[40vw] flex justify-center flex-col">
                        <p className="arimo text-5xl font-bold text-white">Crypto overzicht dashboard</p>
                        <p className="arimo text-2xl font-light text-white">een overzicht om al je favorieten crypto
                            munten te volgen</p>
                    </div>
                    <img src={projecten1} alt="projecten1" className=" h-[90%] w-auto"/>
                </div>
                <div className="gapside h-1/3  flex items-center justify-between">
                    <div className=" h-[90%] w-[40vw] flex justify-center flex-col">
                        <p className="arimo text-5xl font-bold text-white">Who is who?</p>
                        <p className="arimo text-2xl font-light text-white">Twee spelers beurtgebaseerd spel waar bij je
                            het karater van je tegenstander moet gokken.</p>
                    </div>
                    <img src={projecten2} alt="projecten2" className=" h-[90%] w-auto"/>
                </div>
                <div className="gapside h-1/3  flex items-center justify-between">
                    <div className=" h-[90%] w-[40vw] flex justify-center flex-col">
                        <p className="arimo text-5xl font-bold text-white">Experimenten & projecten</p>
                        <p className="arimo text-2xl font-light text-white">Ook buiten school werk ik aan projecten die
                            ik interessant vind, zoals een interactieve React Spotify Game en een zelfrijdende Raspberry
                            Pi RC Auto.</p>
                    </div>
                    <img src={projecten3} alt="projecten3" className=" h-[90%] w-auto"/>
                </div>


                {/*skill*/}
            </div>
            <div className="h-screen w-screen bg-black flex items-center justify-center wrap-normal flex-col ">

                <h1 className="text-3xl font-bold text-white">skill </h1>


                <div className="overflow-hidden relative w-full">
                    <div className="flex animate-marquee space-x-52">
                        {svgArray.map((src, i) => (
                            <img key={i} src={src} className="w-30 h-24"/>
                        ))}
                        {svgArray.map((src, i) => (
                            <img key={`copy-${i}`} src={src} className="w-30 h-24"/>
                        ))}
                    </div>
                </div>


            </div>

            <div className="relative h-[193vh] bg-black">
                {[...Array(20)].map((_, i) => {
                    const animations = [
                        "animate-drift-x",
                        "animate-drift-y",
                        "animate-drift-d1",
                        "animate-drift-d2",
                        "animate-drift-d3",
                        "animate-drift-d4",
                    ];
                    const animation = animations[Math.floor(Math.random() * animations.length)];

                    return (
                        <div
                            key={i}
                            className={`absolute w-[5px] h-[5px] bg-white ${animation}`}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${8 + Math.random() * 8}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    );
                })}
                {/*Tijdrekken*/}
                <div className="sticky top-1/2 transform -translate-y-1/2 h-screen flex items-center justify-center">

                    <h1 className="text-3xl font-bold text-white">
                        Oke, dit was 'm zo ongeveer…
                    </h1>
                </div>

                {/*Footer */}

                <div className="h-[80vh] flex flex-col items-center justify-end bg-black">


                    <div className="h-3/4  w-screen flex flex-col justify-center">
                        <p className="arimo text-5xl font-bold text-gray-400 gapside">contact</p>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a href="mailto:woutschiks@gmail.com"
                           className="arimo text-6xl font-bold text-white gapside block">
                            woutschiks@gmail.com
                        </a>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a href="tel:+3112345653" className="arimo text-6xl font-bold text-white gapside block">
                            +31 12 34 56 53
                        </a>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a href="https://www.linkedin.com/in/woutschiks/" target="_blank" rel="noopener noreferrer"
                           className="arimo text-6xl font-bold text-white gapside block">
                            LinkedIn
                        </a>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a href="https://github.com/Wschiks" target="_blank" rel="noopener noreferrer"
                           className="arimo text-6xl font-bold text-white gapside block">
                            GitHub
                        </a>


                    </div>

                </div>
            </div>

        </div>
    )
        ;
}


export default App




