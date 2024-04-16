import PageTitle from "../../SharedComponent/PageTitle/PageTitle";

const ContactUs = () => {
    const title='Contact Us-Real Residence'

  return (
    <div>
        <PageTitle title={title}></PageTitle>

       <div className="bg-[#666666] p-10">
                <h1 className="text-3xl text-center font-bold text-white ">Contact Us</h1>
        </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5">
        <div className="flex-1">
          
          <input type="text" className="grow mb-4 border-2 block w-full p-4 rounded-xl mt-4" placeholder="Enter a Email" />
          <input type="text" className="grow mb-4 border-2 block w-full p-4 rounded-xl mt-4" placeholder="Name" />
          <textarea name="comment " placeholder="Enter your comment" id="" cols="90" rows="10" className="p-4 border-2 block rounded-xl mb-4 "></textarea>


         
        </div>
        <div className="flex-1">
            <h1 className="text-3xl font-bold text-black">Real Residence</h1>
           <p className="text-xl font-bold text-[#5a393999]"> 629 12th St, Modesto, CA 95354 United States</p>
           <div className="text-yellow-600 bg-slate-300 py-5 px-3 rounded-xl mt-5">
            <p>General Questions</p>
            <p> Contact our Corporate HQ.</p>
            <p>office@domain.com</p>


           </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
