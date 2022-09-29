const targetInput=document.getElementById('input')
const targetButton=document.getElementById('btn')
let getTheVale='';
targetInput.addEventListener('input', (e)=>{
// //     console.log(targetInput.value)
//     console.log(e.target.value)
document.getElementById('palindrom').innerHTML=''



})
targetButton.addEventListener('click',()=>{
     // console.log(targetInput.value)
     let userInput=parseInt(targetInput.value)
     if(userInput===targetInput.value){
          userInput=targetInput.value
     }else{
          userInput=targetInput.value.toLowerCase()
     }
     let isPailndrom=userInput.split('').reverse().join('')===userInput?'This is Pailndrom':'This is not Pailndrom'
     document.getElementById('palindrom').innerHTML=isPailndrom
     if(isPailndrom==='This is Pailndrom'){
          document.getElementById('palindrom').style.color='green'
     }else{
          document.getElementById('palindrom').style.color='red'

     }
})