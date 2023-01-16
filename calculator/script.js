let string = "";
let btns = document.querySelectorAll(".btn");
function isoperator(e){
    if(e=='+'||e=='-'||e=='/'||e=='*'||e=='%'||e=='='){
        return true;
    }
    return false;
};

Array.from(btns).forEach((btn) => {
    btn.addEventListener('keypress', (e)=>{
        if (e.key == '=') {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if (e.key == 'C' || e.key == 'c') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.key == 'B' || e.key=='b') {
            string = string.slice(0,-1);
            document.querySelector('.input').value = string;
        }
        else if (isFinite(e.key) || isoperator(e.key)) {
            string = string + e.key;
            document.querySelector('.input').value = string;
        }
    })
    
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'B') {
            string = string.slice(0,-1);
            document.querySelector('.input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
}
)
