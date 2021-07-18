var img1_click = 0;
var img2_click = 0;
var img3_click = 0;
var bgm = new Audio("hbd.mp3");
$("#img1").click(function(){
    
    if(img1_click == 0)
    {
        $("#img1").attr("src","images/ribbon.gif");
        setTimeout(function(){
            
            $("#img1").attr("src","images/giftbox.png");
           
        },1000);
    }
    else if(img1_click == 1)
    {
        $("#img1").attr("src","images/giftbox.gif");
        $("#clickhere1").css("display","none");
        setTimeout(function(){
            
            $("#img1").attr("src","images/kfcbucket.jpg");
           
        },2000);
    }
    img1_click +=1;
})

$("#img2").click(function(){
    
    if(img2_click == 0)
    {
        $("#img2").attr("src","images/ribbon.gif");
        setTimeout(function(){
            
            $("#img2").attr("src","images/giftbox.png");
            
        },1000);
    }
    else if(img2_click == 1)
    {
        $("#img2").attr("src","images/giftbox.gif");
        $("#clickhere2").css("display","none");
        setTimeout(function(){
            bgm.play()
            $("#img2").attr("src","images/cake.png");
            $("body").css("background-image","url('images/partypopper.gif')");
            document.title = "Happy Birthday Ashwini!😊";
           
        },2000);
    }
    img2_click +=1;
})


$("#img3").click(function(){
    
    if(img3_click == 0)
    {
        $("#img3").attr("src","images/ribbon.gif");
        setTimeout(function(){
            
            $("#img3").attr("src","images/giftbox.png");
            
        },1000);
    }
    else if(img3_click == 1)
    {
        $("#img3").attr("src","images/giftbox.gif");
        $("#clickhere3").css("display","none");
        setTimeout(function(){
            
            $("#img3").attr("src","images/talktome.jpg");
           
        },2000);
    }
    img3_click +=1;
})