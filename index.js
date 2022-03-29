const output = document.querySelector(".output");
const increment= document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let value = ~~(output.value);

increment.addEventListener("click", (e)=>{
    e.preventDefault();
    value++;
    output.innerHTML= value;
})


decrement.addEventListener("click", (e)=>{
    e.preventDefault();
    value<1? value : value--;
    output.innerHTML= value;
})

reset.addEventListener("click", (e)=>{
    e.preventDefault();
    value=0;
    output.innerHTML= value;
})