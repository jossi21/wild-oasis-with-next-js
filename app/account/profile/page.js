import ProfileForm from "@/app/_components/ProfileForm.js";
import SelectCountry from "@/app/_components/selectCountry.js";
export const metadata = {
  title: "Profile",
};
export default function Profile() {
  const countryFlag = "eth.jpg";
  const nationality = "Ethiopia";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4 ">
        Update your guest profile
      </h2>
      <p className="text-lg text-primary-200 mb-8">
        Providing the following information will make your check-in process
        faster and smoother.{" "}
      </p>
      <ProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400"
          defaultCountry={nationality}
        />
      </ProfileForm>
    </div>
  );
}
