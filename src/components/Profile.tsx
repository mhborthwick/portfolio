import placeholderImage from "../assets/head-shot.png";

export function Profile() {
  return (
    <div className="flex flex-col items-center text-center mx-8 my-4 py-4">
      <div className="rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <img
          className="w-24 h-24 rounded-full"
          src={placeholderImage}
          alt="Picture of Mike Borthwick"
        />
      </div>
      <h1 className="text-4xl font-semibold py-2">MIKE HIDEAKI BORTHWICK</h1>
      <div className="holder">
        <div className="ellipse"></div>
        <div className="ellipse ellipse2"></div>
      </div>
      <h3 className="text-xl py-2">Software Engineer in Portland, OR</h3>
    </div>
  );
}
