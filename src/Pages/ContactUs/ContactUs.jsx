import PageTitle from "../../SharedComponent/PageTitle/PageTitle";

const ContactUs = () => {
    const title='Contact Us-Real Residence'

  return (
    <div>
        <PageTitle title={title}></PageTitle>

       <div className="bg-[#666666] p-10">
                <h1 className="text-3xl text-center font-bold text-white ">Contact Us</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 my-10">
        <div >
          
          <input type="text" className="grow mb-4 border-2 block w-full p-4 rounded-xl mt-4 " placeholder="Enter a Email" />
          <input type="text" className="grow mb-4 border-2 block w-full p-4 rounded-xl mt-4" placeholder="Name" />
          <textarea name="comment " placeholder="Enter your comment" id="" cols="30" rows="5" className="hidden md:block p-4 border-2 block rounded-xl mb-4 "></textarea>
          <textarea name="comment " placeholder="Enter your comment" id="" cols="30" rows="5" className="block md:hidden p-4 border-2 block rounded-xl mb-4 "></textarea>

           <button className="btn btn-primary">Submit</button>

         
        </div>
        <div >
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
