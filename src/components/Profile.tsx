import placeholderImage from "../assets/react.svg";

function Profile() {
  return (
    <div className="flex flex-col items-center text-center mx-8 my-4 py-4">
      {/* TODO: Replace image */}
      <img
        className="w-32 h-32"
        src={placeholderImage}
        alt="Picture of Mike Borthwick"
      />
      <h1 className="text-4xl font-semibold py-2">MIKE HIDEAKI BORTHWICK</h1>
      <hr className="w-[200px]" />
      <h3 className="text-xl py-2">Software Engineer in Portland, OR</h3>
    </div>
  );
}

export default Profile;
