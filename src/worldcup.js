$(document).ready(function(){

    let foodArr = [ //이미지 데이터
        "image/chicken.png",
        "image/coldnoodle.png",
        "image/hamburger.png",
        "image/jjam.png",
        "image/jog.png",
        "image/kalguksu.png",
        "image/makchang.png",
        "image/pizza.png",
        "image/ramen.png",
        "image/sam.png",
        "image/shabu.png",
        "image/sundubu.png",
        "image/sushi.png",
        "image/toast.png",
        "image/tteok.png",
        "image/udong.png",
    ]

    function shuffle(array) { //배열 섞기
        array.sort(() => Math.random() - 0.5);
    }

    function gamesArray(array) { //요소 2개씩 slice하고 클릭 이벤트 발생시마다 다음 게임
        let games = [];

        for (let i=0; i<array.length; i+=2){
            games.push(array.slice(i, i+2))
        }

        console.log(games);
        // 배열 요소 2개씩 슬라이스

        let count = 0
        $("#food1").attr("src", games[count][0]);
        $("#food2").attr("src", games[count][1]);


        $("#food1, #food2").click(function() { //클릭 이벤트 발생시마다 다음 게임
            count++;
            $("#food1").attr("src", games[count][0]);
            $("#food2").attr("src", games[count][1]);
        });

        //클릭 이벤트 발생하면 해당 요소 selectedArr에 저장

        let selectedArr = [];


        $("#food1").click(function (){
            selectedArr.push(games[count-1][0]);
            console.log(selectedArr);
            console.log(count);
        });

        $("#food2").click(function (){
            selectedArr.push(games[count-1][1]);
            console.log(selectedArr);
        });
    }

    $("button").click(function (){ //시작 버튼 누르면 배열 섞음
        shuffle(foodArr); //배열 섞기

        gamesArray(foodArr); //배열 2개씩 slice, 이차원 배열로 저장

        //gamesArray(selectedArr)

    })

});
