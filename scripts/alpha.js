function keyBordButtonPress( event){
  const playerPressed=event.key
  console.log('playerPressed', playerPressed)
  if(playerPressed==='Escape'){
    gameOver()
  }
  const currentAlphabetElement=document.getElementById('curent-alphabet')
  const currentAlphabet=currentAlphabetElement.innerText
  const expectedAlphabet=currentAlphabet.toLowerCase()
  console.log(playerPressed, expectedAlphabet)
  //check wrong or right
  if(playerPressed===expectedAlphabet){
      console.log('you got a point')


//// by function
      /*const currentScore=getTextElementValueById('current-score')
      const newScore=currentScore+1
      setElementValueById('current-score', newScore)*/
     // console.log('YOU pressed correctly', expectedAlphabet)
     //update score
     // 1. get current score
    const currentScoreElement=document.getElementById('current-score')
     const currentScoreText=currentScoreElement.innerText
     const currentScore=parseInt(currentScoreText)
   
     // 2. increase the current score
     const newScore=currentScore+1;
     // update new score
      currentScoreElement.innerText=newScore
      console.log(currentScore,newScore)
      removeBgColorById(expectedAlphabet)
      continuePlay()
     
  }else{
     console.log('you lose')


     const currentLife= getTextElementValueById('current-life')
     const newLife=currentLife-1
      setElementValueById('current-life', newLife)
   /* const currentLifeElement=document.getElementById('current-life')
     const currentLifeText=currentLifeElement.innerText
     const currentLife= parseInt(currentLifeText)
     const newLife=currentLife-1
     currentLifeElement.innerText=newLife
     console.log(currentLife, newLife)*/

     if(newLife===0){
 gameOver()
     }
  }
 
  
  
}
document.addEventListener('keyup' , keyBordButtonPress)

 function continuePlay(){
   // step1 get a random alphabet
   const alphabet=getRandomAlphabet()
   console.log( 'your random alphabet',  alphabet)
   // show alphabet
   const currentAlphabet=document.getElementById('curent-alphabet')
  currentAlphabet.innerText=alphabet
  //change bg color
   setBgColorById(alphabet)
 }
 
 
 function play(){
  //  console.log('add')
    //hide home screen
  //  const homeScreen=document.getElementById('home')
    //shoe paly ground
 hiddenElementById('home')
 hiddenElementById('score')
 showElementById('play-ground')
 //reset
 setElementValueById('current-life', 5)
 setElementValueById('current-score', 0)
 continuePlay()
 }
 function gameOver(){
 hiddenElementById('play-ground')
 showElementById('score')
 //show score
   const lastScore=getTextElementValueById('current-score')
   setElementValueById('last-score', lastScore)
   //clear the last alphabet color
   const a=getElementTextById('curent-alphabet')
   removeBgColorById(a)
 }