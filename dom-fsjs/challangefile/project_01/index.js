const btn=document.getElementById('button')

//Give HEX value
const randomColor = () => {
     const letters = '0123456789ABCDEF';
     let color = '#';
     
     for (let i = 0; i < 6; i++) {
          color= color + letters[Math.floor(Math.random() * 16)];
     }
     
     return color;
};
function changeRandomColor(){
     console.log('hello')
     document.body.style.backgroundColor=randomColor();
}


btn.addEventListener("click",changeRandomColor)
