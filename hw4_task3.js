function checkAge() {
    let age_2 = 18;
    let age_3 = 60;

    let inputAge = prompt("Please enter your age:");

    if(inputAge === null) {
        return;
    }

    if (isNaN(inputAge) || inputAge === "" || inputAge < 0 || inputAge % 1 != 0) {
        alert("Please enter a valid positive integer age.");
        return;
    }

    inputAge = parseInt(inputAge);

    switch (true) {
        case inputAge < age_2:
            alert("You don’t have access cause your age is " + inputAge + ". It’s less than " + age_2);
            break;
        case inputAge >= age_2 && inputAge < age_3:
            alert("Welcome!");
            break;
        case inputAge >= age_3:
            alert("Keep calm and look Culture channel");
            break;
        default:
            alert("Technical work");
    }
}