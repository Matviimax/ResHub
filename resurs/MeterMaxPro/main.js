// ---------- Length ---------- //

// inch
function convertToCm() {
  const inchValue = document.getElementById("inch").value;
  document.getElementById("centimeter").value = (inchValue * 2.54).toFixed(2);
}

function convertToInch() {
  const cmValue = document.getElementById("centimeter").value;
  document.getElementById("inch").value = (cmValue / 2.54).toFixed(2);
}

// foot
function convertToCmf() {
  const footValue = document.getElementById("foot").value;
  document.getElementById("centimeterf").value = (footValue * 30.48).toFixed(2);
}

function convertToFoot() {
  const cmfValue = document.getElementById("centimeterf").value;
  document.getElementById("foot").value = (cmfValue / 30.48).toFixed(2);
}

// yard
function convertToMt() {
  const yardValue = document.getElementById("yard").value;
  document.getElementById("meter").value = (yardValue * 0.9144).toFixed(2);
}

function convertToYard() {
  const mtValue = document.getElementById("meter").value;
  document.getElementById("yard").value = (mtValue / 0.9144).toFixed(2);
}

// mile
function convertToKm() {
  const mileValue = document.getElementById("mile").value;
  document.getElementById("kilometer").value = (mileValue * 1.60934).toFixed(2);
}

function convertToMile() {
  const kmValue = document.getElementById("kilometer").value;
  document.getElementById("mile").value = (kmValue / 1.60934).toFixed(2);
}

// ---------- Area ---------- //

// square-inch
function convertToSqCm() {
  const sqinchValue = document.getElementById("square-inch").value;
  document.getElementById("square-centimeter").value = (
    sqinchValue * 6.4516
  ).toFixed(2);
}

function convertToSqInch() {
  const sqcmValue = document.getElementById("square-centimeter").value;
  document.getElementById("square-inch").value = (sqcmValue / 6.4516).toFixed(
    2
  );
}

// square-foot
function convertToSqMtf() {
  const sqfootValue = document.getElementById("square-foot").value;
  document.getElementById("square-meterf").value = (
    sqfootValue * 0.092903
  ).toFixed(2);
}

function convertToSqFoot() {
  const sqmtfValue = document.getElementById("square-meterf").value;
  document.getElementById("square-foot").value = (
    sqmtfValue / 0.092903
  ).toFixed(2);
}

// square-yard
function convertToSqMty() {
  const sqyardValue = document.getElementById("square-yard").value;
  document.getElementById("square-metery").value = (
    sqyardValue * 0.836127
  ).toFixed(2);
}

function convertToSqYard() {
  const sqmtyValue = document.getElementById("square-metery").value;
  document.getElementById("square-yard").value = (
    sqmtyValue / 0.836127
  ).toFixed(2);
}

// acre
function convertToSqMta() {
  const acreValue = document.getElementById("acre").value;
  document.getElementById("square-metera").value = (
    acreValue * 4046.86
  ).toFixed(2);
}

function convertToSqAcre() {
  const sqmtaValue = document.getElementById("square-metera").value;
  document.getElementById("acre").value = (sqmtaValue / 4046.86).toFixed(2);
}

// square-mile
function convertToSqKm() {
  const sqmileValue = document.getElementById("square-mile").value;
  document.getElementById("square-kilometer").value = (
    sqmileValue * 2.58999
  ).toFixed(2);
}

function convertToSqMile() {
  const sqkmValue = document.getElementById("square-kilometer").value;
  document.getElementById("square-mile").value = (sqkmValue / 2.58999).toFixed(
    2
  );
}

// ---------- Volume (liquid) ---------- //

// fluid-ounce
function convertToMlf() {
  const fluValue = document.getElementById("fluid-ounce").value;
  document.getElementById("milliliterf").value = (fluValue * 29.5735).toFixed(
    2
  );
}

function convertToFlu() {
  const mlfValue = document.getElementById("milliliterf").value;
  document.getElementById("fluid-ounce").value = (mlfValue / 29.5735).toFixed(
    2
  );
}

// cup
function convertToMlc() {
  const cupValue = document.getElementById("cup").value;
  document.getElementById("milliliterc").value = (cupValue * 236.588).toFixed(
    2
  );
}

function convertToCup() {
  const mlcValue = document.getElementById("milliliterc").value;
  document.getElementById("cup").value = (mlcValue / 236.588).toFixed(2);
}

// pint
function convertToMlp() {
  const pintValue = document.getElementById("pint").value;
  document.getElementById("milliliterp").value = (pintValue * 473.176).toFixed(
    2
  );
}

function convertToPint() {
  const mlpValue = document.getElementById("milliliterp").value;
  document.getElementById("pint").value = (mlpValue / 473.176).toFixed(2);
}

// quart
function convertToLtq() {
  const quartValue = document.getElementById("quart").value;
  document.getElementById("literq").value = (quartValue * 0.946353).toFixed(2);
}

function convertToQuart() {
  const ltqValue = document.getElementById("literq").value;
  document.getElementById("quart").value = (ltqValue / 0.946353).toFixed(2);
}

// gallon
function convertToLig() {
  const gallonValue = document.getElementById("gallon").value;
  document.getElementById("literg").value = (gallonValue * 3.78541).toFixed(2);
}

function convertToGallon() {
  const ltgValue = document.getElementById("literg").value;
  document.getElementById("gallon").value = (ltgValue / 3.78541).toFixed(2);
}

// ---------- Mass/Weight ---------- //

// ounce
function convertToGram() {
  const ounceValue = document.getElementById("ounce").value;
  document.getElementById("gram").value = (ounceValue * 28.3495).toFixed(2);
}

function convertToOunce() {
  const gramValue = document.getElementById("gram").value;
  document.getElementById("ounce").value = (gramValue / 28.3495).toFixed(2);
}

// pound
function convertToKgk() {
  const poundValue = document.getElementById("pound").value;
  document.getElementById("kilogramk").value = (poundValue * 0.453592).toFixed(
    2
  );
}

function convertToPound() {
  const kgkValue = document.getElementById("kilogramk").value;
  document.getElementById("pound").value = (kgkValue / 0.453592).toFixed(2);
}

// ton
function convertToKgt() {
  const tonValue = document.getElementById("ton").value;
  document.getElementById("kilogramt").value = (tonValue * 907.185).toFixed(2);
}

function convertToTon() {
  const kgtValue = document.getElementById("kilogramt").value;
  document.getElementById("ton").value = (kgtValue / 907.185).toFixed(2);
}

// ---------- Temperature ---------- //

// fahrenheit
function convertToC() {
  const fValue = document.getElementById("fahrenheit").value;
  document.getElementById("grad").value = (((fValue - 32) * 5) / 9).toFixed(2);
}

function convertToF() {
  const cValue = document.getElementById("grad").value;
  document.getElementById("fahrenheit").value = (cValue * 1.8 + 32).toFixed(2);
}

// ---------- Other ---------- //

// mpg
function convertToMpg() {
  const mpgValue = document.getElementById("mpg").value;
  document.getElementById("literspro").value = (235.215 / mpgValue).toFixed(2);
}

function convertToLiters() {
  const litersproValue = document.getElementById("literspro").value;
  document.getElementById("mpg").value = (235.215 / litersproValue).toFixed(2);
}

// liters
const boxes = Array.from(document.querySelectorAll(".blok"));

boxes.forEach((blok) => {
  const title = blok.querySelector(".title");
  const content = blok.querySelector(".content");
  const toggleBtn = blok.querySelector(".toggle-btn");

  // Перевіряємо, чи є блок активним на початку, і якщо так — розгортаємо контент
  if (blok.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px"; // Встановлюємо початкову висоту
    toggleBtn.textContent = "−"; // Відразу встановлюємо мінус
  }

  title.addEventListener("click", () => {
    // Якщо блок активний
    if (blok.classList.contains("active")) {
      // Закриваємо контент
      content.style.maxHeight = "0";
      toggleBtn.textContent = "+"; // Міняємо іконку на плюс
    } else {
      // Відкриваємо контент
      content.style.maxHeight = content.scrollHeight + "px";
      toggleBtn.textContent = "−"; // Міняємо іконку на мінус
    }

    // Додаємо/знімаємо клас active
    blok.classList.toggle("active");
  });
});
