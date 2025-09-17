import './App.css'
import projecten1 from "./assets/projecten1.png";
import projecten2 from "./assets/projecten2.png";
import projecten3 from "./assets/projecten3.png";
import woutFotoPortfolio from "./assets/woutFotoPortfolio.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// pakt alle plaatjes uit de map met .svg stopt dat in de array en die loopen we
const images = import.meta.glob("/src/assets/*.svg", { eager: true });
const svgArray = Object.values(images).map((img) => img.default);

function App() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const projectenRef = useRef(null);
    const aboutMeRef = useRef(null);
    useEffect(() => {

        // animatie naar links en rechts
        gsap.to(leftRef.current, {
            x: "-166vw",
            letterSpacing: "9vw",
            scrollTrigger: {
                trigger: "#header",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(rightRef.current, {
            x: "210vw",
            letterSpacing: "11vw",
            scrollTrigger: {
                trigger: "#header",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // ABOUT ME en PROJECTEN - RESPONSIVE
        ScrollTrigger.matchMedia({
            "(max-width: 767px)": function() {
                gsap.to(aboutMeRef.current, {
                    y: "20vh",
                    fontSize: "10vh",
                    scrollTrigger: {
                        trigger: '#header',
                        start: "center top",
                        end: "top center",
                        endTrigger: "#stopAboutMe",
                        scrub: true,
                    },

                });

                gsap.to(projectenRef.current, {
                    y: "20vh",
                    fontSize: "10vh",
                    scrollTrigger: {
                        trigger: "#projectenStart",
                        start: "top bottom",
                        endTrigger: "#stopAboutMe",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            },

            "(min-width: 768px)": function() {
                gsap.to(aboutMeRef.current, {
                    y: "50vh",
                    fontSize: "30vh",
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
                        trigger: "#projectenStart",
                        start: "top bottom",
                        endTrigger: "#stopAboutMe",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        });
    }, []);



    return (
        <div>
            {/* HEADER */}
            <div id="header" className="w-screen h-screen bg-black flex flex-col overflow-hidden">
                {/* Top */}
                <div className="h-1/5 relative">
                    <div className="gapside h-full flex items-center justify-center tracking-[0.5rem] sm:tracking-[1rem] text-lg sm:text-2xl md:text-3xl">
                        <p className="text-white font">PORTFOLIO</p>
                    </div>

                    {/* streepen */}
                    <div className="absolute top-0 right-0 h-full flex flex-row items-start space-x-3 sm:space-x-[1.8vw] pr-3 sm:pr-6">
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

                {/*/!* Middle *!/*/}
                <div className="gapside  flex flex-col h-2/3 justify-center ">
                    <p ref={leftRef} className="text-5xl sm:text-8xl md:text-[15vh] lg:text-[20vh] xl:text-[30vh] font text-white ">
                        SOFTWARE
                    </p>
                    <p
                        ref={rightRef}
                        className="text-5xl sm:text-8xl md:text-[15vh] lg:text-[20vh] xl:text-[30vh] font text-white flex justify-end "
                    >
                        developer
                    </p>
                </div>



                {/* streepjes onderaan */}
                <div className="flex items-end h-1/5">
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
                </div>
            </div>

            {/* ABOUT ME */}


            <div className="h-[50vh] sm:h-[70vh] w-full bg-black flex items-center flex-col">
                <div className="h-[20vh] sm:h-[35vh] w-full bg-black z-10"></div>
                <p ref={aboutMeRef} className="text-[0vh] font text-white -mt-[15vh] sm:-mt-[30vh]">
                    About me
                </p>
            </div>



            <div id="stopAboutMe" className="h-auto md:h-[100vh] w-full bg-black flex flex-col md:flex-row">
                <div className="gapside h-full flex flex-col md:flex-row">
                    {/* Text */}
                    <div className="w-full md:w-1/2 flex items-center p-4">
                        <div className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font text-justify">
                            Van idee naar code, design en creativiteit. Als 3e jaar software
                            development student breng ik ideeën tot leven op een creatieve manier.
                        </div>
                    </div>

                    {/* Image + heading */}
                    <div className="w-full md:w-1/2 flex items-center justify-center flex-col p-4">
                        <div className="w-40 sm:w-64 md:w-80 lg:w-[48vh] aspect-square flex justify-center">
                            <img
                                src={woutFotoPortfolio}
                                alt="projecten2"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="mt-6 text-center">
                            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[2px] sm:tracking-[6px] md:tracking-[11px] font">
                                Hoi, Ik ben Wout
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECTS  */}
            <div className="h-[50vh] sm:h-[70vh] w-full bg-black flex items-center flex-col">
                <div className="h-[20vh] sm:h-[35vh] w-full bg-black z-10"></div>
                <p ref={projectenRef} className="text-[0vh] font text-white -mt-[15vh] sm:-mt-[30vh]">
                    projecten
                </p>
            </div>

            {/* PROJECTS */}
            <div>
                {/* Project 1 */}
                <div
                    id="projectenStart"
                    className="sticky top-0 h-screen md:h-screen w-screen bg-white flex justify-center z-10 p-6"
                >
                    <div className="gapside flex flex-col md:flex-row md:items-start items-center justify-center md:justify-between gap-6">
                        <div className="w-full md:w-1/2 text-black flex items-center gap-4">
                            <div className="text-2xl font-bold text-gray-300">01</div>
                            <div className="flex flex-col">
                                <p className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                    Crypto overzicht dashboard
                                </p>
                                <p className="text-base sm:text-xl md:text-2xl font-light">
                                    Een overzicht om de waarde van al je favoriete crypto munten te volgen.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={projecten1}
                                alt="projecten1"
                                className="max-h-60 sm:max-h-80 md:max-h-[90%] w-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="sticky top-0 md:top-[33vh] h-screen md:h-[66vh] w-screen bg-gray-100 flex justify-center z-20 p-6">
                    <div className="gapside flex flex-col md:flex-row md:items-start items-center justify-center md:justify-between gap-6">
                        <div className="w-full md:w-1/2 text-black flex items-center gap-4">
                            <div className="text-2xl font-bold text-gray-300">02</div>
                            <div className="flex flex-col">
                                <p className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                    Who is who?
                                </p>
                                <p className="text-base sm:text-xl md:text-2xl font-light">
                                    Multiplayer webgebaseerd game waarbij je het karakter van je tegenstander moet raden.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={projecten2}
                                alt="projecten2"
                                className="max-h-60 sm:max-h-80 md:max-h-[90%] w-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="sticky top-0 md:top-[33vh] h-screen md:h-[33vh] w-screen bg-black flex justify-center z-30 p-6">
                    <div className="gapside flex flex-col md:flex-row md:items-start items-center justify-center md:justify-between gap-6">
                        <div className="w-full md:w-1/2 text-white flex items-center gap-4">
                            <div className="text-2xl font-bold text-gray-300">03</div>
                            <div className="flex flex-col">
                                <p className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                    Experimenten & projecten
                                </p>
                                <p className="text-base sm:text-xl md:text-2xl font-light">
                                    Ook buiten school werk ik aan projecten die ik interessant vind,
                                    zoals een React Spotify Game en een zelfrijdende Raspberry Pi RC
                                    Auto.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                src={projecten3}
                                alt="projecten3"
                                className="max-h-60 sm:max-h-80 md:max-h-[90%] w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* SKILLS */}
            <div className="h-screen w-screen bg-black flex items-center justify-center wrap-normal flex-col ">

                <h1 className="text-3xl font-bold text-white">skills </h1>


                <div className="overflow-hidden relative w-full">
                    <div className="flex animate-marquee space-x-12 sm:space-x-24 md:space-x-52">
                        {svgArray.map((src, i) => (
                            <img key={i} src={src} className="w-20 h-16 sm:w-24 sm:h-20 md:w-30 md:h-24" />
                        ))}
                        {svgArray.map((src, i) => (
                            <img key={`copy-${i}`} src={src} className="w-20 h-16 sm:w-24 sm:h-20 md:w-30 md:h-24" />
                        ))}
                    </div>
                </div>



            </div>

            {/* STARS & FOOTER */}
            <div className="relative h-[150vh] md:h-[193vh] bg-black">
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

                <div className="sticky top-1/2 transform -translate-y-1/2 h-screen flex items-center justify-center">
                    <h1 className="text-xl sm:text-xl md:text-xl font-bold text-white text-center px-4 font">
                        Heeft u een passende stage plek?
                    </h1>
                </div>

                {/* Footer */}
                <div className="h-auto md:h-[80vh] flex flex-col items-center justify-end bg-black py-12">
                    <div className="w-full flex flex-col justify-center px-4 sm:px-12 md:px-24">
                        <p className="arimo text-2xl sm:text-4xl md:text-5xl font-bold text-gray-400 gapside">contact</p>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a
                            href="mailto:woutschiks@gmail.com"
                            className="arimo text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white gapside block"
                        >
                            woutschiks@gmail.com
                        </a>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a
                            href="tel:+31 6 39 54 26 53"
                            className="arimo text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white gapside block"
                        >+31 6 39 54 26 53
                        </a>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a
                            href="https://www.linkedin.com/in/woutschiks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arimo text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white gapside block"
                        >
                            LinkedIn
                        </a>
                        <div className="w-full h-[2px] bg-gray-300 opacity-40 mt-4 mb-4"></div>

                        <a
                            href="https://github.com/Wschiks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arimo text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white gapside block"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
