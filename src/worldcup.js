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

    function games(array) { //요소 2개씩 slice하고 클릭 이벤트 발생시마다 다음 게임
        // 1) array를 요소 2개 slice해서 새 배열 games에 이차원 배열로 담고
        // 2) count = 0 초기화, 클릭 전 초기 값 [0][0] [0][1]로 세팅
        // 3) 클릭 이벤트 발생할 때마다 count ++, 다음 경기 보여주고,
        // 4) 클릭 발생한 요소는 selectedArr에 추가

        let games = []; //2개씩 slice해서 담을 배열
        let selectedArr = []; //클릭 이벤트 발생하면 해당 요소 selectedArr에 저장

        // 배열 요소 2개씩 슬라이스
        for (let i=0; i<array.length; i+=2) {
            games.push(array.slice(i, i+2))
        }
        console.log(games);


        let count = 0 //클릭할 때마다 count++해서 보이게 하고싶은데
                      // 클릭 전 default값을 어떻게 설정할지 몰라서 이렇게 일단 씀
        $("#food1").attr("src", games[count][0]);
        $("#food2").attr("src", games[count][1]);


        $("#food1, #food2").click(function() { //클릭 이벤트 발생시마다 다음 게임 노출
            count++;
            if(count < array.length/2){ //count가 0~7까지 들어와야됨
                $("#food1").attr("src", games[count][0]);
                $("#food2").attr("src", games[count][1]);
            }
            else { //배열 끝까지 click되면 배열 마지막 이미지 보이게
                $("#food1").attr("src", games[games.length-1][0]);
                $("#food2").attr("src", games[games.length-1][1]);
            }
        });

        $("#food1").click(function (){ //클릭한 요소 selectedArr에 추가
            if(count < array.length/2+1){ //0번 요소를 담으려면 클릭(count)이 1이어야 함
                                          //따라서 얘는 카운트 8까지 받아야되고 배열 요소는 7
                selectedArr.push(games[count-1][0]);
                console.log(selectedArr);
                console.log(count);
            }
        });

        $("#food2").click(function (){ //클릭한 요소 selectedArr에 추가
            if(count < array.length/2+1) {
                selectedArr.push(games[count-1][1]);
                console.log(selectedArr);
                console.log(count);
            }
        });

        return selectedArr; //선택된 배열 return
    }

    let result_16R = [];
    let result_8R = [];
    let result_4R = [];
    let result_2R = [];
    $("#start").click(function () { //시작 버튼 누르면 배열 섞음
        shuffle(foodArr); //배열 섞기
        result_16R = games(foodArr); //16강 결과
    });

    $("#Round_8").click(function () { //시작 버튼 누르면 배열 섞음
        shuffle(result_16R); //배열 섞기
        result_8R = games(result_16R); //16강 결과
        console.log(result_8R);
    });

    $("#Round_4").click(function () { //시작 버튼 누르면 배열 섞음
        shuffle(result_8R); //배열 섞기
        result_4R = games(result_8R); //16강 결과
        console.log(result_4R);
    });

    $("#Round_2").click(function () { //시작 버튼 누르면 배열 섞음
        shuffle(result_4R); //배열 섞기
        result_2R = games(result_4R); //16강 결과
        console.log(result_2R);
    });

    // 만약 selectedArr 의 길이 == 매개변수 array의 길이가 되면 다음 라운드 진행
});