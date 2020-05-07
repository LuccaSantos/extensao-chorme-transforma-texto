document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#btn').addEventListener('click', function(){
        let text = document.querySelector('#texto').value
        let option = document.querySelector('#option').value
        
        document.querySelector("#resultado").innerHTML = tranform(text, option)
    })
    function tranform(text, option) {
        if (option == 1){
            return text.toUpperCase()
        }else if (option == 2) {
            return text.toLowerCase()
        }
    }
})