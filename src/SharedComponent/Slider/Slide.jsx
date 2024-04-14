import './slider.css'
const Slide = ({ data }) => {
  const { title, description,image } = data;

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="w-full h-screen rounded-xl  bg-cover bg-no-repeat  ">
      <div className="p-10 flex flex-col justify-center item-center md:items-start h-full" >
        <div className="font-black text-black text-3xl mt-4" data-swiper-parallax="-300">
          {title}
        </div>
        <div className="font-medium text-xl text-black  w-full md:w-1/2 my-3" data-swiper-parallax="-100">
          <p>{description}</p>
        </div>
        <button className=' my-6 px-4 py-3 bg-blue-500 border-2 border-white text-white rounded-xl'>View Details</button>
      </div>
    </div>
  );
};

export default Slide;
