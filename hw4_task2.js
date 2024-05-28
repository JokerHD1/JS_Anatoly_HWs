let age = 10;
let age_2 = 18;
let age_3 = 60;


//subtask1

switch (true) {
  case age < age_2:
    console.log("You don’t have access cause your age is " + age + ". It’s less than " + age_2 + ".");
    break;
  case age >= age_2 && age < age_3:
    console.log("Welcome!");
    break;
  case age > age_3:
    console.log("Keep calm and look Culture channel");
    break;
  default:
    console.log("Technical work");
}

//subtask2

let ageValues = [17, 18, 61, "2", "aaa"];

for (let i = 0; i < ageValues.length; i++) {
    let age = ageValues[i];
    
    if (typeof age !== 'number') {
        console.error("Age is not a number");
    } else if (age < age_2) {
        console.log("You don’t have access cause your age is " + age + ". It’s less than " + age_2 + ".");
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}

//subtask3

for (let i = 0; i < ageValues.length; i++) {
    let age = ageValues[i];
    
    if (!isNaN(age) && !isNaN(parseFloat(age))) {
        age = parseFloat(age);
    }

    switch (true) {
        case age < age_2:
            console.log("You don’t have access cause your age is " + age + ". It’s less than " + age_2 + ".");
            break;
        case age >= age_2 && age < age_3:
            console.log("Welcome!");
            break;
        case age > age_3:
            console.log("Keep calm and look Culture channel");
            break;
        default:
            console.log("Technical work");
    }
}

//vs code почему-то у меня выводит результаты не в правильном порядке при выполнении всех трех сабтасков