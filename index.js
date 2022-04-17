const output = document.querySelector(".output");
const increment= document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let value = ~~(output.value);

increment.addEventListener("click", (e)=>{
    e.preventDefault();
    value++;
    output.textContent= value;
    outputColorChange("green");
})


decrement.addEventListener("click", (e)=>{
    e.preventDefault();
    value<1? value : value--;
    output.textContent= value;
    outputColorChange("red");
})

reset.addEventListener("click", (e)=>{
    e.preventDefault();
    value=0;
    output.textContent= value;
    outputColorChange("aqua");
})

const outputColorChange=(color)=>{
    output.style.background=color;
    setTimeout( ()=>{
    output.style.background="transparent";
    }, 200)
}