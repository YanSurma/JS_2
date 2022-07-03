// hw_2

//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function (age) {
    if (age < 18) {
        console.log("You don't have access cause your age is " + age + " It's less then " + 18);
    }
    else if (age >= 18 && age < 61) {
        console.log("Welcome !");
    }
    else if (age > 61) {
        console.log("Keep calm and look Culture channel");
    }
    else {
        console.log("Technical work");
    }
}


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка

const checkAgeTwo = function (age) {
    if (!age || age == true || age == false || age < 0 || (typeof (age) != 'number')) {
        console.log('Invalid input');
    } else if (age < 18) {
        console.log("You don't have access cause your age is " + age + " It's less then " + 18);
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !");
    }
    else if (age > 61) {
        console.log("Keep calm and look Culture channel");
    }
    else {
        console.log("Technical work");
    }
}
checkAgeTwo("abc");
checkAgeTwo(" ");
checkAgeTwo(17);
checkAgeTwo(18);
checkAgeTwo(62);
checkAgeTwo(61);
checkAgeTwo(true);
checkAgeTwo(false);
checkAgeTwo(-17);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge3 = function (age) {

    if (!age || age == true || age == false || age < 0 || isNaN(age)) {
        console.log("Invalid input");
    } else if (age < 18) {
        console.log("You don't have access cause your age is " + age + " It's less then " + 18);
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !");
    } else if (age > 61) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }

}

checkAgeThree("17");
checkAgeThree("qwe");
checkAgeThree("");
checkAgeThree(17);
checkAgeThree(18);
checkAgeThree(62);
checkAgeThree(61);
checkAgeThree(true);
checkAgeThree(false);
checkAgeThree(-17);