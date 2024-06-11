const age = 10;
const age_2 = 18;
const age_3 = 60;


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

const ageValues = [17, 18, 61, "2", "aaa"];

for (const i = 0; i < ageValues.length; i++) {
    const age = ageValues[i];
    
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

for (const i = 0; i < ageValues.length; i++) {
    const age = ageValues[i];
    
    if (!isNaN(age) && !isNaN(parseInt(age))) {
        age = parseInt(age);
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