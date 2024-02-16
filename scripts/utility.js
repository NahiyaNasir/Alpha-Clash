  function hiddenElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden')
  }
  function showElementById(elementId){
 const element=document.getElementById(elementId)
 element.classList.remove('hidden')
  }

  function setBgColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-orange-400')
 }
 function removeBgColorById(elementId){
   const element=document.getElementById(elementId)
   element.classList.remove('bg-orange-400')
     }
 function getTextElementValueById(elementId ){
  const element=document.getElementById(elementId)
  const elementText=element.innerText
   const value=parseInt(elementText)
  return value
 }
 function setElementValueById(elementId,value ){
   const element=document.getElementById(elementId)
   element.innerText=value
 }
 function getElementTextById(elementId){
  const element=document.getElementById(elementId)
  const tex=element.innerText
  return tex
 }
  function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
  const alphabets=alphabetString.split('');
 // console.log( alphabets);
const randomAlphabet=Math.random()*25
const index=Math.round(randomAlphabet)
 
  const alphabet= alphabets[index]
// console.log( index,alphabet)
 return alphabet
  }
 