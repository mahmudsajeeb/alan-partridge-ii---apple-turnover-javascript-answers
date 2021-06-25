function apple(x){
  if(Number(x)**2 > 1000){
    return 'It\'s hotter than the sun!!'
  }
  else{
    
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
    }
}

const appleAlan = (x) => Math.pow(x,2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'

console.log(apple('50'))