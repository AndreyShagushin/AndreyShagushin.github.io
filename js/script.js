$(document).ready(function () {
    $(".loader_inner").fadeOut();
    $(".loader").fadeOut("slow");



    $(window).scroll(() => {
        let scrollDistanse = $(window).scrollTop();
        $(".section").each((i, el) => {
            if ($(el).offset().top - ($("nav").outerHeight()) <= scrollDistanse) {

                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active_menu")) {
                        $(el).removeClass("active_menu");
                    }
                });
                $("nav li:eq(" + i + ")").find('a').addClass("active_menu");
            }
        });

        if (scrollDistanse < ($(".main").outerHeight() - $("nav").outerHeight())) {
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active_menu")) {
                    $(el).removeClass("active_menu");
                }
            });
        }
    });

    
    

    let option = {
        threshold: 1.0
    }
    let observer = new IntersectionObserver(onEntry, option);
    let elemetn = $(".my_statictic");
    elemetn.each((i, el) => {
        observer.observe(el);
    });
    $('.image-link').magnificPopup({ type: 'image' });


    $('.clients').slick({
      });

    

});

function onEntry(entry) {
    entry.forEach(element => {
        if (element.isIntersecting) {
            $('.spincrement').css('opacity', '1');
            $('.spincrement').spincrement({
                thousandSeparator: "",
                duration: 1500
            });
        }
    });
}



//-------------------------------------------------------
var type_site_options = [
    ["Визитка", "5000"],
    ["Интеренет-магазин", "10000"],
    ["Интеренет-витрина", "15000"],
    ["Корпоротивный", "20000"],
];

type_site_options.forEach(function (item, i, arr) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = arr[i][0] + " - " + arr[i][1] + "р";
    document.getElementById("type_site").appendChild(opt);
});
//-------------------------------------------------------
var design_site_options = [
    ["Дизайн1", "0"],
    ["Дизайн2", "3000"],
    ["Дизайн3", "5000"],
];
design_site_options.forEach(function (item, i, arr) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = arr[i][0] + " + " + arr[i][1] + "р";
    document.getElementById("design_site").appendChild(opt);
});
//-------------------------------------------------------
var adaptiv_site_options = [
    ["Нет", "0"],
    ["Мобильные устройства", "3000"],
    ["Планшеты", "5000"],
    ["Мобильные устройства и планшеты", "7000"],
];
adaptiv_site_options.forEach(function (item, i, arr) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = arr[i][0] + " + " + arr[i][1] + "р";
    document.getElementById("adaptive_site").appendChild(opt);
});
//-------------------------------------------------------
var deadlines_site_options = [
    ["3 месяца", "0"],
    ["3-4 недели", "3000"],
    ["7 дней", "5000"],
];
deadlines_site_options.forEach(function (item, i, arr) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.text = arr[i][0] + " + " + arr[i][1] + "р";
    document.getElementById("deadlines_site").appendChild(opt);
});


let order = {
    type: "",
    price_type: 0,
    price_design: 0,
    price_adaptiv: 0,
    price_deadlines: 0,
    design: "",
    adaptiv: "",
    deadlines: "",
    fullprise: function () {
        return this.price_type + this.price_design + this.price_adaptiv + this.price_deadlines + "р.";
    },

};


document.getElementById("type_site").addEventListener('change', function (e) {
    order.type = type_site_options[e.target.value][0];
    order.price_type = Number(type_site_options[e.target.value][1]);
    document.getElementById("cost_id").textContent = (order.fullprise());
    // document.getElementById("deadlines_id").appendChild(txt);// design_site_options[e.target.value][1];
});

document.getElementById("design_site").addEventListener('change', function (e) {
    order.design = design_site_options[e.target.value][0];
    order.price_design = Number(design_site_options[e.target.value][1]);

    document.getElementById("cost_id").textContent = (order.fullprise());
    // document.getElementById("deadlines_id").appendChild(txt);// design_site_options[e.target.value][1];
});

document.getElementById("adaptive_site").addEventListener('change', function (e) {
    order.adaptiv = adaptiv_site_options[e.target.value][0];
    order.price_adaptiv = Number(adaptiv_site_options[e.target.value][1]);
    document.getElementById("cost_id").textContent = (order.fullprise());
    // document.getElementById("deadlines_id").appendChild(txt);// design_site_options[e.target.value][1];
});

document.getElementById("deadlines_site").addEventListener('change', function (e) {
    order.deadlines = deadlines_site_options[e.target.value][0];
    order.price_deadlines = Number(deadlines_site_options[e.target.value][1]);
    document.getElementById("cost_id").textContent = (order.fullprise());
    document.getElementById("deadlines_id").textContent = (order.deadlines);
    // document.getElementById("deadlines_id").appendChild(txt);// design_site_options[e.target.value][1];
});

document.getElementById("feedback_ok").addEventListener("click", ()=> {
    alert("Ваше письмо отправлено");
});

$('.menu li a').on('click', ()=>{
    if($('.navbar-collapse').hasClass("show")){
        $('.navbar-collapse').removeClass("show");
    }
});



