function idgenerate() {
    let a = localStorage.getItem('data');
        console.log(a);
    a = a.split(',');
    try{
        console.log(a);
    }
    catch(error ){
        console.log("error");
    }
        document.getElementById("0").innerText = a[0];
        document.getElementById("1").innerText = a[1];
        document.getElementById("2").innerText = a[2];
        document.getElementById("3").innerText = a[3];
        document.getElementById("4").innerText = a[4];
        document.getElementById("5").innerText = a[5];
        document.getElementById("6").innerText = a[6];
        document.getElementById("7").innerText = a[7];
        document.getElementById("8").innerText = a[8];
        document.getElementById("9").innerText = a[9];
        document.getElementById("10").innerText = a[10];
        document.getElementById("11").innerText = a[11];
        document.querySelector("#userimg").setAttribute("src", localStorage.getItem('img'));
        localStorage.clear();
    
}
idgenerate();
