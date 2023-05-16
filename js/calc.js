function getNum(num) {
    
    switch (num) {
        //clear screen
        case 'AC':
            console.log(document.getElementById('result').value = "");
            break;
        
        //remove last number
        case 'C':
            var currentResult = document.getElementById("result").value;
            document.getElementById('result').value = document.getElementById("result").value.slice(0, currentResult.length - 1);
            console.log(document.getElementById("result").value.slice(0, currentResult.length - 1));
            break;

        //shows result
        case '=':
            console.log(document.getElementById('result').value = eval(document.getElementById('result').value));
            console.log(document.getElementById('result').value);
            break;

        //calculate sin
        case 'sin':
            console.log(document.getElementById("result").value = Math.sin(document.getElementById("result").value));
            break;

        //calculate cos
        case 'cos':
            console.log(document.getElementById("result").value = Math.cos(document.getElementById("result").value));
            break;
        
        //calculate log
        case 'log':
            console.log(document.getElementById("result").value = Math.log(document.getElementById("result").value));
            break;

        //calculate &pi
        case '&pi;':
            console.log(document.getElementById("result").value += Math.PI);
            break;

        //shows num on screen
        default:
            console.log(document.getElementById('result').value += num);
            break;
    }
    
    
    
}