function calculate() {
  const input = document.getElementById("calcInput").value;
  try {
    const result = eval(input);
    document.getElementById("calcResult").innerText = `Result: ${result}`;
  } catch (e) {
    document.getElementById("calcResult").innerText = "Invalid expression.";
  }
}

function checkPrime() {
  const num = parseInt(document.getElementById("primeInput").value);
  if (isNaN(num) || num < 2) {
    document.getElementById("primeResult").innerText = "Enter a number ≥ 2";
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      document.getElementById("primeResult").innerText = `${num} is NOT prime.`;
      return;
    }
  }
  document.getElementById("primeResult").innerText = `${num} is prime.`;
}

function checkEvenOdd() {
  const num = parseInt(document.getElementById("evenOddInput").value);
  if (isNaN(num)) {
    document.getElementById("evenOddResult").innerText = "Please enter a valid number.";
  } else {
    const result = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById("evenOddResult").innerText = `${num} is ${result}.`;
  }
}

function printTable() {
  const num = parseInt(document.getElementById("tableInput").value);
  const list = document.getElementById("tableOutput");
  list.innerHTML = '';
  if (isNaN(num)) {
    list.innerHTML = "<li>Please enter a valid number.</li>";
    return;
  }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerText = `${num} × ${i} = ${num * i}`;
    list.appendChild(li);
  }
}
