function getNum(num) {
    
    switch (num) {
        //caler screen
        case 'AC':
            document.getElementById('result').value = "";
            break;
        
        //remove last number
        case 'C':
            var currentResult = document.getElementById("result").value;
            document.getElementById("result").value.slice(0, currentResult.length - 1);
            break;

        //shows result
        case '=':
            document.getElementById('result').value = eval(document.getElementById('result').value);
            console.log(document.getElementById('result').value);
            break;

        //calculate sin
        case 'sin':
            document.getElementById("result").value = Math.sin(document.getElementById("result").value);
            break;

        //calculate cos
        case 'cos';
            document.getElementById("result").value = Math.cos(document.getElementById("result").value);
            break;
        
        //calculate log
        case 'log':
            document.getElementById("result").value = Math.log(document.getElementById("result").value);
            break;

        //calculate &pi
        case '&pi;':
            document.getElementById("result").value = Math.PI(document.getElementById("result").value);
            break;

        //shows num on screen
        default:
            document.getElementById('result').value += num;
            break;
    }
    
    
    
}