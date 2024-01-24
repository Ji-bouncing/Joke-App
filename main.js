
document.querySelector('#getJoke').addEventListener('click',getJokes)
function getJokes(){
  const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
     
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.joke){
                  document.querySelector('p').innerText = data.joke
        }else{
                  document.querySelector('p').innerText = data.setup
        }
      })
      .catch(err => {
        console.log(`Error ${err}`)
      })
}