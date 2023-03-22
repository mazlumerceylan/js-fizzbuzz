let number = "";
const container = document.querySelector(".container")
console.log(container)
for (let i = 1; i <= 100; i++){

  number = i;
  
  if (!(i % 3)) {
    number = 'Fizz';
  }

  if (!(i % 5)) {
    number = 'Buzz';
    
  }

  if (!(i % 15)) {
    number = 'FizzBuzz';
  }

  console.log(number);
  const box = document.createElement("div")
  box.classList.add("box")
  container.append(box)
  box.append(number)
}