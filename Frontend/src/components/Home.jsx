const Home = ({users}) => {
  return (
    <div className="flex flex-col h-[87svh] ">
      <h1 className="text-4xl font-bold text-gray-800 py-8 text-center">User Details</h1>
      <div className='grid grid-cols-3 p-4 h-full overflow-y-scroll'>
        {
          users.length > 0 &&
          users.map((user, index) => {
            return (
              <div key={user._id || index} className='w-80 my-8 rounded-2xl flex justify-center flex-col item-center gap-5 bg-[#ffffff] p-3'>
                <h1 className='text-xl'>Name: {user.firstName} {user.lastName}</h1>
                <h1 className='text-xl'>Phone no: {user.phone}</h1>
                <h1 className='text-xl'>Location: {user.location}</h1>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Home;

