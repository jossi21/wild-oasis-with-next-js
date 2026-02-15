export const metadata = {
  title: "Profile",
};
export default function Profile() {
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 ">
        Update your guest profile
      </h2>
      <p className="text-lg text-primary-200 mb-8">
        Providing the following information will make your check-in process
        faster and smoother.{" "}
      </p>

      <form className="bg-primary-900 py-8 px-12 text-lg flex flex-col gap-7">
        <div className="space-y-2 flex flex-col">
          <label>Full Name</label>
          <input className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 " />
        </div>
        <div className="space-y-2">
          <label>Email</label>
          <input className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 " />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src="flag.jpg"
              alt="country flag "
              className="h-5 rounded-lg"
            />
            {/* here country list */}
          </div>
        </div>
        <div className="space-y-2">
          <label>National ID number</label>
          <input
            name="nationalID"
            className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 "
          />
        </div>
        <div className="flex justify-end items-center gap-5">
          <button className="bg-accent-400 px-7 py-3 text-primary-700 font-semibold rounded-sm hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
