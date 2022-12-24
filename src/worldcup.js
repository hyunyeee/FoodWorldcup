$(document).ready(function(){

    let foodArr = [ //이미지 데이터
        "src/image/chicken.png",
        "src/image/coldnoodle.png",
        "src/image/hamburger.png",
        "src/image/jjam.png",
        "src/image/jog.png",
        "src/image/kalguksu.png",
        "src/image/makchang.png",
        "src/image/pizza.png",
        "src/image/ramen.png",
        "src/image/sam.png",
        "src/image/shabu.png",
        "src/image/sundubu.png",
        "src/image/sushi.png",
        "src/image/toast.png",
        "src/image/tteok.png",
        "src/image/udong.png",
    ]

    function shuffle(array) { //배열 섞기
        array.sort(() => Math.random() - 0.5);
    }

    $("#box1 img").click(function (){
        $(this).addClass("click");
    });

    $("#box2 img").click(function (){
        $(this).addClass("click");
    });
});
