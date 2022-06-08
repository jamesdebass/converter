



function convertvalues() {
  var Numb = document.getElementById("Numb1").value;  
    
    
    // Length (Metres/Feet Calculation) //
   
    document.getElementById("inputmetres").textContent=Numb
    document.getElementById("inputfeet").textContent=Numb

    let metresfeet = 3.28084
    let outputfeet = Numb * metresfeet ;
    outputfeet = outputfeet.toFixed(3)
   
    document.getElementById("outputfeet").textContent= outputfeet
   
   let outputmetres = Numb / metresfeet ;
    outputmetres = outputmetres.toFixed(3)
    document.getElementById("outputmetres").textContent= outputmetres
   
   // Volume (Litres/Gallons Calculation)

   document.getElementById("inputgallons").textContent=Numb
   document.getElementById("inputlitres").textContent=Numb

   let litresgallon = 0.219969157
   let outputgallons = Numb * litresgallon ;
    outputgallons = outputgallons.toFixed(3)
    document.getElementById("outputgallons").textContent= outputgallons;
    
    let outputlitres = Numb / litresgallon ;
    outputlitres = outputlitres.toFixed(3)
    document.getElementById("outputlitres").textContent= outputlitres
    

// Mass (Kilos/Pounds Calculation)

    document.getElementById("inputkilos").textContent=Numb
    document.getElementById("inputpounds").textContent=Numb

    let kilospounds = 2.20462
    let outputpounds = Numb *kilospounds ;
    outputpounds = outputpounds.toFixed(3)
    document.getElementById("outputpounds").textContent= outputpounds;
    
    let outputkilos = Numb * kilospounds ;
    outputkilos = outputkilos.toFixed(3)
    document.getElementById("outputkilos").textContent= outputkilos
    


}