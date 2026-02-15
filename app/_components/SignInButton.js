export default function SignInButton() {
  return (
    <button className="flex items-center gap-5 text-lg border border-primary-300 px-8 py-3 font-medium">
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        className="h-6 w-6"
      />
      <span>Continue with Google</span>
    </button>
  );
}
