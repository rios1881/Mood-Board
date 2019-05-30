$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happyMood ();
    } else if(input==="angry"){
      angryMood ();
    }else if(input==="sad"){
        sadMood ();
    }else if(input==="excited"){
       excitedMood();
    }else{
     alert("please enter happy, sad, or angry!");   
    }
});

function happyMood(){
    changeBackground("orange");
    addImages("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLmHI-6l9G4YXldBJnvlcNMbMRcVw70nWRycSlsk7ga_apalY");
    changeTextColor("white");
}

function angryMood(){
     changeBackground("black");
    addImages("https://ih1.redbubble.net/image.390530322.7725/ap,550x550,12x16,1,transparent,t.u1.png");
    changeTextColor("red");
}
function sadMood(){
     changeBackground("blue");
    addImages("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8IrLUf7P9D6TDZRTaKxqkMbGLwlxsl-4xWZ_7sB0YueYO3QGsA");
    changeTextColor("white");
}
function excitedMood(){
     changeBackground("yellow");
    addImages("https://image.freepik.com/free-photo/excited-woman-jumping_23-2147699199.jpg");
    changeTextColor("purple");
}

function changeBackground(backgroundColor){
    $('body').css('backgroundColor',backgroundColor);
}

function addImages(image){
     $('.images').append('<img src ='+ image + '>');
}
function changeTextColor(color){
    $('body').css('color', color);
}