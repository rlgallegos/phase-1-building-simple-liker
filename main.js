// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal'); 

const glyphs = document.getElementsByClassName('like')

for (let i = 0; i < glyphs.length; i++) {
  glyphs[i].addEventListener('click', (e) => {
    console.log(glyphs)

    //call "server" with lab function
    mimicServerCall()
      .then((() => {
        console.log(glyphs[i])
        let heart = glyphs[i].lastChild;
        //SUCCESS: change the heart
        if (heart.innerHTML === EMPTY_HEART) {
          heart.innerHTML = FULL_HEART;
          heart.className = "activated-heart";
          console.log("Successfully clicked on empty heart")
        }
        else if (heart.innerHTML === FULL_HEART) {
          heart.innerHTML = EMPTY_HEART;
          heart.className = '';
          console.log("Successfully clicked on full heart")
        }
      }))
      
      .catch(reason => {
        //FAILURE
        //unset hidden classname and set inntertext to error message
        modal.className = '';
        setTimeout(() => {modal.className = 'hidden'}, 3000)  
        //display error on banner
        document.getElementById('modal-message').innerText = reason;

      });
    
      
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
