const menuBtn = document.querySelector ('#menuBtn');
const sideNav = document.querySelector('#sideNav');
const cancelBtn = document.querySelector ('#cancelBtn');

sideNav.style.right = "-250px";
menuBtn.onclick=()=>{ 
if(sideNav.style.right == "-250px"){
    sideNav.style.right="0"
}
else{
sideNav.style.right = "-250px";

}};

