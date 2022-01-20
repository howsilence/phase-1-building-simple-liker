// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeHearts = document.querySelectorAll( ".like-glyph" );


// Your JavaScript code goes here!
function handleIt( e ) {
  const heart = e.target;
  mimicServerCall( "fakeURL" )
  .then( () => {
    if ( heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.ClassName = "activated-heart";
    } else {
      heart.innerText = EMPTY_HEART;
      heart.ClassName = "";
    }
  } )
  .catch(error => {
    const modal = document.querySelector( "#modal" )
    modal.className = "";
    modal.innerText = error;
    setTimeout( () => modal.className = "hidden", 3000 );
  } );
}

for (const heart of likeHearts) {
heart.addEventListener( "click", handleIt );
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
