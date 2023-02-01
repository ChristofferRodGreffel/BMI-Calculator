const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiOutput = document.getElementById("result");
const bmiForm = document.querySelector("form");
const contextOutput = document.querySelector("#meaning");

bmiForm.addEventListener("submit", (event) => {
  event.preventDefault();
  bmiFunction();
});

function bmiFunction() {
  let weightResult = weightInput.value;
  let heightResult = heightInput.value / 100;
  let finalBmi = weightResult / (heightResult * heightResult);
  let bmiRounded = Math.round(finalBmi * 10) / 10;
  bmiOutput.innerHTML = `Dit BMI er: ${bmiRounded}`;
  bmiForm.reset();

  if (bmiRounded <= 18.5) {
    contextOutput.innerHTML = `Med en BMI på ${bmiRounded} er du er undervægtig.`;
  } else if (bmiRounded > 18.5 && bmiRounded < 25) {
    contextOutput.innerHTML = `Med en BMI på ${bmiRounded} har du en normal vægt.`;
  } else if (bmiRounded > 25 && bmiRounded < 30) {
    contextOutput.innerHTML = `Med en BMI på ${bmiRounded} er du er moderat overvægtig.`;
  } else {
    contextOutput.innerHTML = `Med en BMI på ${bmiRounded} er du er overvægtig.`;
  }

  weightInput.addEventListener("click", () => {
    bmiOutput.innerHTML = "Dit BMI er:";
    contextOutput.innerHTML = "&nbsp;";
  });
  heightInput.addEventListener("click", () => {
    bmiOutput.innerHTML = "Dit BMI er:";
    contextOutput.innerHTML = "&nbsp;";
  });
}
