
$(document).ready(function () {
    $(".loader_inner").fadeOut();
    $(".loader").fadeOut("slow");

    input_type();
    console.log(order);
    input_design();
    console.log(order);
    input_adaptiv();
    console.log(order);
    input_deadlines();
    console.log(order);

    send_result();

});

var type_site_options = [
    ["Визитка", "5000"],
    ["Интеренет-магазин", "10000"],
    ["Интеренет-витрина", "15000"],
    ["Корпоротивный", "20000"],
];

var design_site_options = [
    ["Дизайн1", "0"],
    ["Дизайн2", "3000"],
    ["Дизайн3", "5000"],
    ["Дизайн4", "20000"],
];

var adaptiv_site_options = [
    ["Нет", "0"],
    ["Мобильные устройства", "3000"],
    ["Планшеты", "5000"],
    ["Мобильные устройства и планшеты", "7000"],
];

var deadlines_site_options = [
    ["3 месяца", "0"],
    ["3-4 недели", "3000"],
    ["7 дней", "5000"],
];


let order = {
    type: "",
    price: 0,
    design: "",
    adaptiv: "",
    deadlines:"",
};




let correct_input = false;

function input_type() {
    let temp = "";
    let count = 1;
    let type_site;
    for (let i of type_site_options) {
        temp += count + " " + i[0] + " - " + i[1] + "р\n";
        count++;
    }
    do {
        type_site = prompt('Введите номер требуемого типа сайта?\n' + temp, 1);
        if (!Number.isInteger(Number(type_site))) {
            alert("Введите число!");
            correct_input = false;
        } else if (Number(type_site) < 1 || Number(type_site) > type_site_options.length) {
            alert("Не корректно введеное число!");
            correct_input = false;
        }
        else {
            correct_input = true;
        }
    } while (!correct_input);
    order.type = type_site_options[Number(type_site) - 1][0];
    order.price = Number(type_site_options[Number(type_site) - 1][1]);
}

function input_design() {
    correct_input = false;
    let temp = "";
    let count = 1;
    let design;
    for (let i of design_site_options) {
        temp += count + " " + i[0] + " - +" + i[1] + "р\n";
        count++;
    }
    do {
        design = prompt('Введите номер требуемого дизайна сайта?\n' + temp, 1);
        if (!Number.isInteger(Number(design))) {
            alert("Введите число!");
            correct_input = false;
        } else if (Number(design) < 1 || Number(design) > design_site_options.length) {
            alert("Не корректно введеное число!");
            correct_input = false;
        }
        else {
            correct_input = true;
        }
    } while (!correct_input);
    order.design = design_site_options[Number(design) - 1][0];
    order.price += Number(design_site_options[Number(design) - 1][1]);
}

function input_adaptiv() {
    correct_input = false;
    let temp = "";
    let count = 1;
    let adaptiv;
    for (let i of adaptiv_site_options) {
        temp += count + " " + i[0] + " - +" + i[1] + "р\n";
        count++;
    }
    do {
        adaptiv = prompt('Введите необходимую адаптивность сайта?\n' + temp, 1);
        if (!Number.isInteger(Number(adaptiv))) {
            alert("Введите число!");
            correct_input = false;
        } else if (Number(adaptiv) < 1 || Number(adaptiv) > adaptiv_site_options.length) {
            alert("Не корректно введеное число!");
            correct_input = false;
        }
        else {
            correct_input = true;
        }
    } while (!correct_input);
    order.adaptiv = adaptiv_site_options[Number(adaptiv) - 1][0];
    order.price += Number(adaptiv_site_options[Number(adaptiv) - 1][1]);
}

function input_deadlines() {
    correct_input = false;
    let temp = "";
    let count = 1;
    let deadlines;
    for (let i of deadlines_site_options) {
        temp += count + " " + i[0] + " - +" + i[1] + "р\n";
        count++;
    }
    do {
        deadlines = prompt('Введите сроки выполнения заказа?\n' + temp, 1);
        if (!Number.isInteger(Number(deadlines))) {
            alert("Введите число!");
            correct_input = false;
        } else if (Number(deadlines) < 1 || Number(deadlines) > deadlines_site_options.length) {
            alert("Не корректно введеное число!");
            correct_input = false;
        }
        else {
            correct_input = true;
        }
    } while (!correct_input);
    order.deadlines = deadlines_site_options[Number(deadlines) - 1][0];
    order.price += Number(deadlines_site_options[Number(deadlines) - 1][1]);
}

function send_result(){
    let temp = "Вы выбрали сайт " + order.type + 
                "c " + order.design + " дизайном.";
    if(order.adaptiv === 'Нет'){
        temp += "\nБез адаптивности под мобильные устройства или планшеты!";
    }
    else{
        temp += "\nВам необходимо, что бы "+order.adaptiv + " корректно отображали сайт";
    }

    temp += "\nСроки выполнения " + order.deadlines;
    temp += "\n---------------------------------------";
    temp +="\nИтоговая стоимость: " + order.price;
    alert(temp);

}


console.log(order);