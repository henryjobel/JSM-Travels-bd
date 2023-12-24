import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './service.css'
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedata.json');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" paralax-image bg-fixed" >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.name}>
            <div className="flex flex-col items-center mx-24 my-16" data-aos="zoom-in">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={service.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.short_des}</p>
                    <div className="card-actions justify-center">
                    <Link to={`/details/${service.id}`}><button className='btn'>See Details</button></Link>
                    </div>
                </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
