import './App.css'
import projecten1 from "./assets/projecten1.png";
import projecten2 from "./assets/projecten2.png";
import projecten3 from "./assets/projecten3.png";
import woutFotoPortfolio from "./assets/woutFotoPortfolio.png";


import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);


// pakt alle plaatjes uit de map met .svg stopt dat in de array en die loopen we

const images = import.meta.glob("/src/assets/*.svg", {eager: true});
const svgArray = Object.values(images).map(img => img.default);


function App() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const projectenRef = useRef(null);
    const aboutMeRef = useRef(null);

    useEffect(() => {
        gsap.to(leftRef.current, {
            x: "-166vw",
            letterSpacing: "9vw",
            scrollTrigger: {
                trigger: '#header',
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(rightRef.current, {
            x: "210vw",
            letterSpacing: "11vw",
            scrollTrigger: {
                trigger: '#header',
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(aboutMeRef.current, {
            y: "33vh",
            fontSize: "35vh",
            scrollTrigger: {
                trigger: '#header',
                start: "bottom top",
                end: "top center",
                endTrigger: "#stopAboutMe",
                scrub: true,
            },
        });

        gsap.to(projectenRef.current, {
            y: "25vh",
            fontSize: "30vh",
            scrollTrigger: {
                trigger: '#projectenStart',
                start: "top bottom",
                endTrigger: "#stopAboutMe",
                end: "bottom top",
                scrub: true,
            },
        });

    }, []);


    return (
        <div>
            <div id="header" className="w-screen h-screen bg-black flex flex-col overflow-hidden">
                {/* Top section */}
                <div className="h-1/5  relative">
                    {/* Gapside content (always centered in the screen) */}
                    <div
                        className="gapside  h-full flex items-center justify-center tracking-[1rem] text-3xl">
                        <p className="text-white font">PORTFOLIO</p>
                    </div>

                    {/* Stripes (stick to the right side) */}
                    <div
                        className="absolute top-0 right-0 h-full flex flex-row items-start space-x-[1.8vw]  pr-6">
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

                <div className="gapside  flex flex-col h-2/3 justify-center leading-[22vh]">
                    <p ref={leftRef} className="text-[30vh] font text-white ">SOFTWARE</p>
                    <p ref={rightRef}
                       className="text-[30vh] font text-white flex justify-end ">developer</p>
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

                </div>
            </div>

            <div className="h-[70vh] w-full bg-black flex  items-center flex-col">
                <div className="h-[35vh] w-full bg-black z-10">

                </div>
                <p ref={aboutMeRef} className="text-[0vh] font text-white left-slide-text -mt-[45vh]">About me</p>
            </div>

            <div id="stopAboutMe" className="h-[100vh] w-full bg-black flex flex-row">
                <div
                    className="gapside h-full flex flex-row">
                    <div className="w-1/2  flex items-center ">
                        <div className="w-[57.2vh] text-justify aspect-square  text-white text-[60px] font">
                            Van idee naar code, design en creativiteit. Als 3e jaar software development student breng
                            ik ideeën tot leven op een creatieve manier.
                        </div>


                    </div>
                    <div className="w-1/2  flex items-center justify-center flex-col ">
                        <div className=" w-[48vh] aspect-square flex justify-center">
                            <img src={woutFotoPortfolio} alt="projecten2" className="object-cover h-full grayscale-[40%] "/>
                        </div>
                        <div className="w-[48vh] flex  justify-center">
                            <h1 className="text-white text-[60px] tracking-[11px]  font">Hoi, Ik ben Wout </h1>
                        </div>
                    </div>
                </div>


            </div>

            <div className="h-[70vh] w-full bg-black flex  items-center flex-col">
                <div className="h-[35vh] w-full bg-black z-10">

                </div>
                <p ref={projectenRef} className="text-[0vh] font text-white left-slide-text -mt-[30vh]">projecten</p>
            </div>
            {/* Info Box */
            }
            <div>
                {/* Info 1 */}
                <div id="projectenStart" className="sticky top-0 h-screen w-screen bg-white flex justify-center z-10">
                    <div
                        className=" gapside h-1/3 flex items-center justify-between">

                        <div className="h-full aspect-square w-[calc(+50%)]  flex items-center text-black ">
                            <div className="w-[50px] h-[110px] arimo text-4xl font-bold text-gray-300 "><p>01</p></div>
                            <div className="flex flex-col">
                                <p className="arimo text-5xl font-bold text-black">Crypto overzicht dashboard</p>
                                <p className="arimo text-2xl font-light text-black">een overzicht om al je favorieten
                                    crypto
                                    munten te volgen</p>
                            </div>
                        </div>
                        <div
                            className="h-full aspect-square w-[calc(+35%)]  flex items-center justify-center text-black">
                            <img src={projecten1} alt="projecten1" className=" h-[90%] w-auto"/>
                        </div>

                    </div>
                </div>

                {/* Info 2 */}
                <div className="sticky top-[33vh] h-[66vh] w-screen bg-gray-100 flex justify-center z-20">
                    <div
                        className=" gapside h-1/2 flex items-center justify-between">
                        <div className="h-full aspect-square w-[calc(+50%)]  flex items-center text-black ">
                            <div className="w-[50px] h-[110px] arimo text-4xl font-bold text-gray-300 "><p>02</p></div>
                            <div className="flex flex-col">
                                <p className="arimo text-5xl font-bold text-black">Who is who?</p>
                                <p className="arimo text-2xl font-light text-black">Twee spelers beurtgebaseerd spel
                                    waar bij je
                                    het karater van je tegenstander moet gokken.</p></div>
                        </div>
                        <div
                            className="h-full aspect-square w-[calc(+35%)]  flex items-center justify-center text-black">
                            <img src={projecten2} alt="projecten2" className=" h-[90%] w-auto"/></div>

                    </div>
                </div>

                {/* Info 3 */}
                <div className="sticky h-[33vh] w-screen bg-black flex justify-center z-30">
                    <div
                        className=" gapside h-full flex items-center justify-between">
                        <div className="h-full aspect-square w-[calc(+50%)]  flex items-center text-white ">
                            <div className="w-[50px] h-[110px] arimo text-4xl font-bold text-gray-300 "><p>03</p></div>
                            <div className="flex flex-col">
                            <p className="arimo text-5xl font-bold text-white">Experimenten & projecten</p>
                            <p className="arimo text-2xl font-light text-white"> Ook buiten school werk ik aan projecten
                                die
                                ik interessant vind, zoals een React Spotify Game en een zelfrijdende
                                Raspberry
                                Pi RC Auto.</p></div></div>
                        <div
                            className="h-full aspect-square w-[calc(+35%)]  flex items-center justify-center text-white">
                            <img src={projecten3} alt="projecten3" className=" h-[90%] w-auto"/></div>

                    </div>
                </div>
            </div>


            {/*skill*/}
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




