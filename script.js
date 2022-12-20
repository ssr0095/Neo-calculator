var screen = document.getElementById("Oscreen");

function Dis(a){
    screen.value += a;
}

function calc(){
   try{
    screen.value = eval(screen.value);
   }
   catch{
    // alert("invalid");
    screen.value = 'err❌';
    setTimeout(() => {
        clr()
        }, 700);
   }
}



function clr(){
    screen.value = null;
}

function Del(){
    screen.value = screen.value.slice(0,-1);
}