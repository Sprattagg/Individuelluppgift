


function add (e){
    e.preventDefault();

    // Input
    const text = document.querySelector(".text").value;
    const value = document.querySelector(".varde").value;

    // Inkomst & kostnad
    const inkomstDiv = document.querySelector(".inkomstdiv");
    const kostnadDiv = document.querySelector(".kostnaddiv");
    const inkomstDivValue = document.querySelector(".inkomstdiv").innerHTML;
    const kostnadDivValue = document.querySelector(".kostnaddiv").innerHTML;

    // Listor
    const inkomstLista = document.querySelector(".inkomst-lista-div");
    const kostnadsLista = document.querySelector(".kostnads-lista-div");

    //li
    const li = document.createElement("li");

    // omvandlare
    const kostnadNegativ = (Number(~value)) + 1;

    // plockar totalbelopp
    const totalh = document.querySelector(".totalh");

    //dropdown
    const x = document.querySelector(".dropdown").selectedIndex;
    

    if (x == 0) {
        
        //kost li
        inkomstLista.appendChild(li);
        li.textContent= text + " " + "+" + value  + "kr";
        //
        inkomstDiv.innerHTML = (Number(inkomstDivValue)) + (Number(value));
    }

    else if (x == 1){
        
        //kost li
        kostnadsLista.appendChild(li);
        li.textContent = text + " " + kostnadNegativ + "kr";
        //Total
        kostnadDiv.innerHTML = (Number(kostnadDivValue)) + kostnadNegativ;
    }


    return totalh.innerHTML = (Number(inkomstDiv.innerHTML)) + (Number(kostnadDiv.innerHTML));


}

const btn = document.querySelector(".btn");
btn.addEventListener("click" , add);