import placeholderImage from "../assets/react.svg";

function Profile() {
  return (
    <div className="flex flex-col items-center m-4">
      {/* TODO: Replace image */}
      <img
        className="w-32 h-32"
        src={placeholderImage}
        alt="Picture of Mike Borthwick"
      />
      <h1>Mike Hideaki Borthwick</h1>
      <hr />
      <h3>Software Engineer in Portland, OR</h3>
    </div>
  );
}

export default Profile;
