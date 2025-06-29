function nameage() {
  let name = prompt("What is your name?");
  let age = prompt("What is your age?");
  return { name, age };
}

function askNameAndAge() {
  let user = nameage();
  alert("Hello " + user.name + ", you are " + user.age + " years old.");
}
