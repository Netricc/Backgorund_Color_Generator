document.addEventListener("DOMContentLoaded", function () {
    const gradientBox = document.getElementById("gradient-box");
    const colorInputs = document.getElementById("color-inputs");
    const generateBtn = document.getElementById("generate-btn");


    function setGradient(colors) {
        gradientBox.style.background = `linear-gradient(to right, ${colors.join(", ")})`;
    }

    function getColors() {
        const colorPickers = document.querySelectorAll(".color-picker");
        const colors = [];
        colorPickers.forEach(function (picker) {
            colors.push(picker.value);
        });
        return colors;
    }







    function generate() {
        const colors = getColors();
        setGradient(colors);
    }

    gradientBox.addEventListener("click", function () {
        const colorPicker = document.createElement("input");
        colorPicker.type = "color";
        colorPicker.classList.add("color-picker");
        colorInputs.appendChild(colorPicker);
        generate()
    });

    generateBtn.addEventListener("click", () => {

        generate()
    });

    // Initial gradient
    const initialColors = getColors();
    setGradient(initialColors);
});



