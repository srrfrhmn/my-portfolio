import myResume from "../assets/Sarraf_Rahman_resume.pdf";

export default function Resume() {
  function handleButtonClick() {
    window.open(myResume, "_blank");
  }

  return (
    <button className="button-cont fill-left" onClick={handleButtonClick}>
      Sarraf_Rahman_resume.pdf
    </button>
  );
}