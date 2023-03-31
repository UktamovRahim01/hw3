let names = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let name1 = prompt(`ведите имя или номер`)
console.log(names);
if ((name1 - 1) > -1 && (name1 - 1) < names.length) {

    let num = name1 - 1
    let name3 = names[num]
    names.splice(num, 1)
    console.log(names);
    console.log(name3 + `  элемент №_` + name1 + ` был успешно удален`);

}
else {
        // проважу изменения
    name1 = name1.toLocaleLowerCase();
    let name2 = name1[0]
    name2 = name2.toLocaleUpperCase();
    name1 = name1.slice(1)
    name1 = name2 + name1;
    if (names.includes(name1) === true) {
        // нахажу кардинаты и убираю имя
        let otv = names.indexOf(name1) + 1
        let otv2 = names.splice(otv - 1, 1)

        // проверка
        console.log(names);
        console.log(name1 + `  элемент №_` + otv + ` был успешно удален`);
    }
    else {
        alert(`нет такого имени`)
    }

}

// второе задание
console.log(`второе задание`);

let arr = [[{a:{price: 20}}],[{a:{price: 35}}],[{a:{price:44}}]] 
let total = 0
total = arr[0][0].a.price + arr[1][0].a.price + arr[2][0].a.price
console.log(total);