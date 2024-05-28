
function generate() {
    let a = [];
    a[0] = document.getElementById("name").value ;
    a[1] = document.getElementById("IDno").value ;
    a[2] = document.getElementById("fathername").value ;
    a[3] = document.getElementById("dob").value ;   
    a[4] = document.getElementById("email").value ;   
    a[5] = document.getElementById("pemail").value ;   
    a[6] = document.getElementById("phone").value  ;   
    a[7] = document.getElementById("pphone").value ;   
    a[8] = document.getElementById("add").value.replaceAll(','," ") ;   
    a[9] = document.getElementById("branch").value ;
    a[10] = document.getElementById("blood").value ;
    a[11] = document.getElementById("programme").value ;
    console.log(a)
    localStorage.setItem('data', a);    
}

document.querySelector('#img').addEventListener("change", function () {
const reader = new FileReader();
    reader.addEventListener("load", () =>
    {
    localStorage.setItem('img',reader.result)
    });
reader.readAsDataURL(this.files[0]);
});
