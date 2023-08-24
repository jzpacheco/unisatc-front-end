document.addEventListener("DOMContentLoaded", function() {
    function greetMe(nome, idade) {
        alert(nome+", "+idade);
    }

    document.getElementById("btnGreetMe").onclick = function() {
        greetMe("Jefferson",26);
    }

});
