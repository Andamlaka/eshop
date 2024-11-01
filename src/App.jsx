import React from 'react'
import Navbar  from 
"./components/Navbar/Navbar.jsx";
import Hero from 
"./components/Hero/hero.jsx";
import Catagory from
 "./components/Catagory/catagory.jsx"
import Catagory2 from
 "./components/Catagory/Catagory2.jsx"
 import Services from
 "./components/Services/Services.jsx"
 import Banner from
 "./components/Banner/Banner.jsx"
 import Partners from
 "./components/Partners/Partners.jsx"

 import headphone from
 "./assets/hero/headphone.png";
 import smartwatch2 from
  "./assets/catagory/smartwatch2-removebg-preview.png";
 import Products from
 "./components/Products/Products.jsx"
import Blogs from
 "./components/Blogs/Blogs.jsx";
 import Footer from
 "./components/Footer/Footer.jsx"
 import Popup from
 "./components/Popup/Popup.jsx"
 import AOS from "aos";
 import "aos/dist/aos.css"
 const BannerData = {
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  title4:
  "Lorem ipsum, dolor sit amet consectetur adipis",
  bgColor:"#f42c37",
 }
 const BannerData2 = {
  discount:"30% OFF",
  title:"Happy Hours",
  date:"14 Jan to 28 Jan",
  image:smartwatch2,
  title2:"Smart Sole",
  title3:"Winter Sale",
  title4:     
  "Lorem ipsum, dolor sit amet consectetur adipis",
  bgColor:"#2dcc6f",
 };


const App = () => {
  const[orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup =() => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
      
      });
      AOS.refresh();
  },[]);
  return (
     
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Navbar  handleOrderPopup ={handleOrderPopup}  />
    <Hero handleOrderPopup ={handleOrderPopup} /> 
      <Catagory />
      <Catagory2 />
      <Services />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}
      handleOrderPopup={handleOrderPopup} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup}
      handleOrderPopup={handleOrderPopup}/>
    </div>
  );
}

export default App;