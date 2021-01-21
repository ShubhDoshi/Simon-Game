var ansPattern=[];
var clickedPattern=[];
var colours=["red","blue","green","yellow"];
var level=0;
var temp=false;
$(document).keypress(function(){
    if (!temp){
        $("h1").text("Level "+level);
        sequence();
        temp=true;
    }
})
$(".btn").click(function(){
    var choice=$(this).attr("id");
    clickedPattern.push(choice);
    if (choice==="red"){
        $("#red").fadeOut(100).fadeIn(100);
        $("#red").addClass("pressed");
        setTimeout(function(){
            $("#red").removeClass("pressed");
        },100);
        var red=new Audio("sounds/red.mp3");
        red.play();
    } 
    if (choice==="blue"){
        $("#blue").fadeOut(100).fadeIn(100);
        $("#blue").addClass("pressed");
        setTimeout(function(){
            $("#blue").removeClass("pressed");
        },100);
        var blue=new Audio("sounds/blue.mp3");
        blue.play();
    }
    if (choice==="green"){
        $("#green").fadeOut(100).fadeIn(100);
        $("#green").addClass("pressed");
        setTimeout(function(){
            $("#green").removeClass("pressed");
        },100);
        var green=new Audio("sounds/green.mp3");
        green.play();
    }
    if (choice==="yellow"){
        $("#yellow").fadeOut(100).fadeIn(100);
        $("#yellow").addClass("pressed");
        setTimeout(function(){
            $("#yellow").removeClass("pressed");
        },100);
        var yellow=new Audio("sounds/yellow.mp3");
        yellow.play();
    }
    solve(clickedPattern.length-1);
});
function sequence(){
    clickedPattern=[];
    level+=1;
    $("h1").text("Level "+level);
    var num=Math.floor(4*Math.random());
    ansPattern.push(colours[num]);
    if (num===0){
        $("#red").fadeOut(100).fadeIn(100);
        var red=new Audio("sounds/red.mp3");
        red.play();
    }
    if (num===1){
        $("#blue").fadeOut(100).fadeIn(100);
        var blue=new Audio("sounds/blue.mp3");
        blue.play();
    }
    if (num===2){
        $("#green").fadeOut(100).fadeIn(100);
        var green=new Audio("sounds/green.mp3");
        green.play();
    }
    if (num===3){
        $("#yellow").fadeOut(100).fadeIn(100);
        var yellow=new Audio("sounds/yellow.mp3");
        yellow.play();
    }
}
function solve(x){
    if (ansPattern[x]===clickedPattern[x]){
        if (ansPattern.length===clickedPattern.length){
            setTimeout(function(){
                sequence();
            },1000);
        }
    }
    else{
        var wrong=new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        $("h1").text("Game Over! Press Any Key To Restart.");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startAgain();
    }
}
function startAgain(){
    level=0;
    temp=false;
    ansPattern=[];
}
