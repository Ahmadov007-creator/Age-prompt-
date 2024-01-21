var eltitle = document.querySelector('.title')
var age = prompt('please, write your age')
var b = 18
if(age > b){
    eltitle.innerHTML = ('Xush kelibsiz Aka');
}else if(age == b){
    eltitle.innerHTML = ('Xush kelibsiz dost');
}else{
    eltitle.innerHTML = ('Katta bolib kel');
}