 import React from 'react';
 import Slider from "react-slick";
 import Image1 from "../../assets/hero/headphone.png";
 import Image2 from "../../assets/catagory/vr.png";
 import Image3 from "../../assets/catagory/macbook.png";
  import Button from '../Shared/Button.jsx';
 const HeroData = [
    {
        id:1, 
        img:Image1,
        subtitle:"Beats Solo",
        title:"Wireless",
        title2:"Headphone",
        
    },
    {
        id:2,
        img:Image2,
        subtitle:"Beats Solo",
        title:"Wireless",
        title2:"virtual",
        
    },
    {
        id:3,
        img:Image3,
        subtitle:"Beat Solo",
        title:"Branded",
        title2:"Laptops",
        
    },

 ]
 
const Hero = ({handleOrderPopup}) => {
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          
    };
   return (
       <div className='container'>
     <div className='overflow-hidden roounded-3xl min-h-[550px]
     sm:h-[650px] hero-bg-color flex justify-center
     items-center'>
        <div className='container pb-8 sm:pb-0'>
            {/* Hero section  */} 
            
        
        <Slider  {...settings}> 
            {HeroData.map((data) => (
                <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div className='flex flex-col justify-center
                        gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                        sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 
                            data-aos ="zoom-out"
                            data-aoa-duration ="500"
                            data-aos-once = "true"
                            
                            className='text-2xl sm:text-6xl
                            lg:text-2xl font-bold'>{data.subtitle}</h1>
                            <h1 
                            data-aos ="zoom-out"
                            data-aoa-duration ="500"
                            data-aos-once = "true"
                            className='text-5xl sm:text-6xl
                            lg:text-7xl font-bold'>{data.title}</h1>
                            <h1 
                            data-aos ="zoom-out"
                            data-aoa-duration ="500"
                            data-aos-once = "true"
                            className='text-5xl uppercase text-white
                            dark:text-white/5 sm:text-[80px] 
                            md:text-[100px] xl:text-[105px] font-bold'>{data.title2}</h1>
                            <div 
                            data-aos ="fade-up"
                            data-aoa-duration ="500"
                            data-aos-0ffset = "0"
                            data-aos-delay ="300"
                            >
                                <Button
                            
                                text="Shop By Catagory"
                                bgColor="bg-primary"
                                textColor="text-white"
                                handler = {handleOrderPopup}
                                  />
                            </div>         
                        </div>
                        {/* Img section */}
                        <div className=' order-1 sm:order-2 '>
                            <div 
                             data-aos = "zoom-in"
                             data-aos-once = "true"
                             className='relative-z-10'
                             >
                                <img 
                                src={data.img} alt="" 
                                className='"w-[300px] h-[300px] sm:h-[450px] 
                                sm:scale-105 lg:scale-110 object-contain 
                                mx-auto drop-shadow-[-8px_4px_6px_rgb(0,0,0,-4)] relative z-40'/>
                            </div>
                        </div>
                    </div>    
                </div>
            ))}
        </Slider>
        </div>
        </div> 
     </div> 
   )
 }
 
 export default Hero;