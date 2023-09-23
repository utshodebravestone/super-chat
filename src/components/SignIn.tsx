const SignIn = ({ onSignIn }: { onSignIn: () => void }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button
        onClick={onSignIn}
        className="px-6 py-3 bg-emerald-500 text-white text-xl font-bold border border-emerald-500 rounded hover:bg-transparent hover:text-emerald-500 transition-colors duration-300"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default SignIn;
