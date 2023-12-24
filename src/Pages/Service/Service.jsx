import Services from "../../Components/services/services";



const Service = () => {
    return (
        <div>
            <div className="hero h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/XpN1h7c/pictr.jpg)' }} data-aos="zoom-in">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='gap-7 flex'>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl'  data-aos="fade-right">Air Ticket</button>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl' data-aos="fade-left">Train Tickets</button>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl'  data-aos="fade-right">Bus Tickets</button>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl' data-aos="fade-left">Tour Package</button>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl' data-aos="fade-right">Hotel Booking</button>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl' data-aos="fade-left">Visa</button>
                        <button className='btn  text-white bg-blue-700 bg-opacity-30 hover:bg-blue-700 text-xl' data-aos="fade-left">Medical Tourism</button>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-left">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4">
                    Welcome to JSM <span className="text-blue-500">Trevel</span> BD
                </h1>
                <p className="text-lg text-gray-800 mb-8">Air Ticket & buy more from our service </p>
            </div>


            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Service;