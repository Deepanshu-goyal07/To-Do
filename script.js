let inputs = document.getElementById("bt");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Your Task");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <img src="https://img.icons8.com/Dusk_Wired/512/FFFFFF/filled-trash.png">`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("img").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}