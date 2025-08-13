import { Link } from "react-router-dom";
function About() {
  return (
<div className="about-page-container">
            <img
                src={`https://picsum.photos/1600/900?random=${Date.now()}`}
                alt="About hero"
                className="max-w-full h-[200px] w-full object-cover object-center"
            />

            <div className="px-[23px] text-[#161616] mb-[55px]">
                <h1 className="leading-[38px] font-bold">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="leading-[22px] mt-4">
                    Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off
                    without a hitch. (Hitch costs extra 😉)
                </p>
                <p className="leading-[22px] mt-4">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring
                    the world on 4 wheels.
                </p>
            </div>

            <div className="bg-[#FFCC8D] text-[#161616] px-[32px] pb-[32px] mx-[27px] rounded-[5px]">
                <h2 className="m-0 py-[37px] font-bold text-xl">
                    Your destination is waiting.<br />Your van is ready.
                </h2>
                <Link
                    to="/vans"
                    className="bg-[#161616] text-white rounded-[10px] px-4 py-2 inline-block no-underline"
                >
                    Explore our vans
                </Link>
            </div>
        </div>
  )
}

export default About