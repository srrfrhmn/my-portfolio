import myResume from "../assets/Sarraf_Rahman_Resume.pdf";

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