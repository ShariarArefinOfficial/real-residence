import './slider.css'
const Slide = ({ data }) => {
  const { title, description,image } = data;

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="w-full h-screen rounded-xl opacity-100 shadow-xl  bg-cover bg-no-repeat  ">
      <div className="p-10  flex flex-col justify-center item-center h-full" >
        <h3 className="font-black text-[#1c1c1c] text-3xl md:text-[60px] mt-4 text-center" data-swiper-parallax="-300">
          {title}
        </h3>
        <p className="font-medium text-xl text-white  w-full md:w-1/2 my-3 mx-auto text-center">{description}</p>

        
        
      </div>
    </div>
  );
};

export default Slide;
