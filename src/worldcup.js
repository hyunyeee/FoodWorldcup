$(document).ready(function(){

    let data = [
        {key: "치킨", value: "image/chicken.png"},
        {key: "냉면", value: "image/coldnoodle.png"},
        {key: "햄버거", value: "image/hamburger.png"},
        {key: "짬뽕", value: "image/jjam.png"},
        {key: "족발", value: "image/jog.png"},
        {key: "칼국수", value: "image/kalguksu.png"},
        {key: "막창", value: "image/makchang.png"},
        {key: "피자", value: "image/pizza.png"},
        {key: "라면", value: "image/ramen.png"},
        {key: "삼겹살", value: "image/sam.png"},
        {key: "샤브샤브", value: "image/shabu.png"},
        {key: "순두부", value: "image/sundubu.png"},
        {key: "초밥", value: "image/sushi.png"},
        {key: "토스트", value: "image/toast.png"},
        {key: "떡볶이", value: "image/tteok.png"},
        {key: "우동", value: "image/udong.png"},
    ]

    function shuffle(array) { //배열 섞기
        array.sort(() => Math.random() - 0.5);
        console.log(array);
        return array;
    }

    let round = 0;
    function games(array) { //요소 2개씩 slice하고 클릭 이벤트 발생시마다 다음 게임
        // 1) array를 요소 2개 slice해서 새 배열 games에 이차원 배열로 담고
        // 2) count = 0 초기화, 클릭 전 초기 값 [0][0] [0][1]로 세팅
        // 3) 클릭 이벤트 발생할 때마다 count ++, 다음 경기 보여주고,
        // 4) 클릭 발생한 요소는 selectedArr에 추가

        $("#food1, #food2, #screen, #food1:hover, #food2:hover, .nextRoundButton").removeClass("alertLastImage");
        round ++;

        let games = []; //2개씩 slice해서 담을 배열
        let selectedArr = []; //클릭 이벤트 발생하면 해당 요소 selectedArr에 저장

        // 배열 요소 2개씩 슬라이스
        for (let i=0; i<array.length; i+=2) {
            games.push(array.slice(i, i+2));
        }

        console.log(games);
        console.log("round : " + round);

        let count = 0 //클릭할 때마다 count++해서 보이게 하고싶은데
                      // 클릭 전 default값을 어떻게 설정할지 몰라서 이렇게 일단 씀

        $("#food1").attr("src", games[count][0].value);
        $("#food2").attr("src", games[count][1].value);

        $("#namebox1").text(games[count][0].key);
        $("#namebox2").text(games[count][1].key);

        $("#food1, #food2").click(function() { //클릭 이벤트 발생시마다 다음 게임 노출

            count++;
            if(count < array.length/2){ //count가 0~7까지 들어와야됨
                $("#food1, #food2, #screen, #food1:hover, #food2:hover, .nextRoundButton").removeClass("alertLastImage");

                $("#food1").attr("src", games[count][0].value).addClass("click");
                $("#food2").attr("src", games[count][1].value).addClass("click");

                $("#namebox1").text(games[count][0].key);
                $("#namebox2").text(games[count][1].key);
            }

            else { //배열 끝까지 click되면 배열 마지막 이미지 보이게
                $("#food1").attr("src", games[games.length-1][0].value)
                $("#food2").attr("src", games[games.length-1][1].value)

                $("#namebox1").text(games[games.length-1][0].key);
                $("#namebox2").text(games[games.length-1][1].key);

                $("#food1, #food2, #screen, #food1:hover, #food2:hover").addClass("alertLastImage");

                switch (round){
                    case 1:
                        $("#start").addClass("hidden");
                        $(".nextRoundButton").removeClass("alertLastImage");
                        $("#Round_8").addClass("alertLastImage");
                        break;

                    case 2:
                        $(".nextRoundButton").removeClass("alertLastImage");
                        $("#Round_4").addClass("alertLastImage");
                        break;

                    case 3:
                        $(".nextRoundButton").removeClass("alertLastImage");
                        $("#Round_2").addClass("alertLastImage");
                        break;

                    case 4:
                        $("#food1, #food2, .nextRoundButton").removeClass("alertLastImage")
                        $("#food1, #food2").addClass("win");
                        $(this).addClass("winner");
                        // $("#start").removeClass("nextRoundButton"); //승자 나오면 start버튼 다시 보이게 -> 다시하기 기능 추가 아직 X
                        break;
                }
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
        $(this).addClass("nextRoundButton");
        $("#screen").addClass("hidden");
        let shuffledData = shuffle(data); //배열 섞기
        result_16R = games(shuffledData); //16강 결과
    });

    $("#Round_8").click(function () { //8강
        shuffle(result_16R); //배열 섞기
        result_8R = games(result_16R); //8강 결과
        console.log(result_8R);
    });

    $("#Round_4").click(function () { //4강
        shuffle(result_8R); //배열 섞기
        result_4R = games(result_8R); //4강 결과
        console.log(result_4R);
    });

    $("#Round_2").click(function () { //결승
        shuffle(result_4R); //배열 섞기
        result_2R = games(result_4R); //결승 결과
        console.log(result_2R);
    });
});