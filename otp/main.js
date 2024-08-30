const inputs = document.querySelectorAll("input");

const MAX_INPUTS = inputs.length - 1;

inputs[0].focus();

inputs.forEach((i, index) => {
    i.addEventListener("keyup", (e) => {
        if(e.key === "Backspace" || index === MAX_INPUTS) return;
        inputs[index+1].focus();
    })

    i.addEventListener("keydown", (e) => {
        if(e.key !== "Backspace" || i.value || index === 0) return;

        inputs[index-1].focus();
    })
})