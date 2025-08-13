import { Link } from "react-router-dom";
function Home() {
  return (
    <div
            className="min-h-[350px] text-white px-[23px] py-[45px] bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url('https://picsum.photos/1600/900?random=${Date.now()}')`
            }}
        >
            <h1 className="font-bold text-[2.25rem] leading-[42px]">
                You got the travel plans, we got the travel vans.
            </h1>
            <p className="leading-[24px]">
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Link
                to="vans"
                className="inline-block text-center no-underline bg-[#FF8C38] w-full mt-[27px] py-3 text-white font-bold rounded-[5px] cursor-pointer transition-transform duration-100 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px]"
            >
                Find your van
            </Link>
        </div>
  )
}

export default Home