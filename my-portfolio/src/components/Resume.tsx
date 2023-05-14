import myResume from "../assets/my-resume.pdf";

export default function Resume() {
  function handleButtonClick() {
    window.open(myResume, "_blank");
  }

  return (
    <button className="button-cont fill-left" onClick={handleButtonClick}>
      SarrafRahmanResume.pdf
    </button>
  );
}