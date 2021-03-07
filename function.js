/*
4 işlemi barındıran fonksiyonlar burada yer almaktadır.
*/

function add(x,y) {
    let sum = x+y;
    return sum;
}


function sub(x,y) {
    let sub = x-y;
    return sub;
}


function mult(x,y) {
    let mult = x*y;
    return mult;
}


function div(x,y) {
    let div = x/y;
    return div;
}

module.exports={add,sub,mult,div};

