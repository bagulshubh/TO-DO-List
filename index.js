console.log("Working");
let input = document.querySelector('.input');
let divcon = document.querySelector('.list-con');
let removebtn = document.querySelector('.btn-add');

let no = 1;
let value;


removebtn.addEventListener('click',function(){
    divcon.innerHTML="";
    no=1;
})

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        value = input.value;
        addatask(value);
    }
});

addatask = (v) =>{
    if(v==""){
        return;
    }

    let div = document.createElement("div");
    div.classList.add("stylediv");
    div.classList.add("del");

    let number = document.createElement("p");
    number.innerText=no;
    div.appendChild(number);
    no++;

    let para = document.createElement("p");
    para.innerText = v;
    para.classList.add("para-style");
    div.appendChild(para);

    let img3 = document.createElement("img");
    img3.src= "./change.png";
    img3.classList.add("wset");
    div.appendChild(img3);

    let img = document.createElement("img");
    img.src = "./tickimg.png";
    img.classList.add("wset");
    div.appendChild(img);

    let img2 = document.createElement("img");
    img2.src = "bin.png";
    img2.classList.add("wset");
    div.appendChild(img2);

    img3.addEventListener('click',function(){
        div.removeChild(div.children[1]);
        let changed_input = document.createElement("input");
        div.insertBefore(changed_input,div.children[1]);
        changed_input.classList.add("para-style");
        changed_input.value=v;
        let change_v = changed_input.value;
        div.classList.remove("cut");
        changed_input.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                para.innerText = changed_input.value;
                div.removeChild(div.children[1]);
                div.insertBefore(para,div.children[1]);
                v=changed_input.value;
                div.classList.remove("cut");
            }
        });
    })

    img.addEventListener('click',function(){
        div.classList.add("cut");
    })

    img2.addEventListener('click',function(){
        div.classList.remove("del");
    })


    divcon.appendChild(div);

    input.value="";
}
