
document.addEventListener("DOMContentLoaded", function () {
    
    var button = document.getElementById("fixEditButton");

    // Add an event listener to the button
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting to avoid refresh

        // Get the values from the input fields
        var cohesion = document.getElementById("cohesionInput").value;
        var normalStress = document.getElementById("normalStressInput").value;
        var frictionAngle = document.getElementById("frictionAngleInput").value;
        var weightSoilNS = document.getElementById("weightSoilNS").value;
        var heightSlope = document.getElementById("heightSlope").value;
        var slopeAngle = document.getElementById("slopeAngleInput").value;

        // Log the values to the console
        console.log("Cohesion:", cohesion);
        console.log("Normal Stress:", normalStress);
        console.log("Friction Angle:", frictionAngle);
        console.log("Weight of Soil (NS):", weightSoilNS);
        console.log("Height Slope:", heightSlope);
        console.log("Slope Angle:", slopeAngle);
    
        // set the var in the browser local storage
        localStorage.setItem('cohesion',cohesion)
        localStorage.setItem('normalStress',normalStress)
        localStorage.setItem('frictionAngle',frictionAngle)
        localStorage.setItem('weightSoilNS',weightSoilNS)
        localStorage.setItem('heightSlope',heightSlope)
        localStorage.setItem('slopeAngle',slopeAngle)
    });
});
