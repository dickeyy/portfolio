import '../assets/css/App.css';
import Header from '../components/Header';
import 'font-awesome/css/font-awesome.min.css';

function HomePage() {

  return (
    <div>
    <div className="App">

      
      
      {/* <Header /> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <main>kyle dickey</main>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className='social-container'>
        <a href='https://twitter.com/kyledickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-twitter fa-3x socialIcon"> </a>

        <a href='https://instagram.com/kyle.dickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-instagram fa-3x socialIcon"> </a>

        <a href='https://github.com/dickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-github fa-3x socialIcon"> </a>

        <a href='https://twitch.tv/imdickey' target="_blank" rel="noreferrer" className="fa fa-brands fa-twitch fa-3x socialIcon"> </a>
      </div>

      </div>

      <br></br>

      <div className='project-container'>

      <p className='proj-title'>Projects</p>
      <p className='proj-subtitle'>Click to expand (Not in any order)</p>

      <button id='acc-1' class="accordion" onClick={() => { accClick('acc-1') }}>DoxBot</button>
      <div class="panel">
        <p>The last Discord bot you'll ever need</p>

        <br></br>

        <a className='proj-link' href='https://doxbot.xyz' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-2' class="accordion" onClick={() => { accClick('acc-2') }}>LasTag</button>
      <div class="panel">
        <p>The last gamer tag you'll ever need.</p>

        <br></br>

        <a className='proj-link' href='https://lastag.xyz' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-3' class="accordion" onClick={() => { accClick('acc-3') }}>Alias</button>
      <div class="panel">
        <p>The fun for all ages party game... Now modernized!</p>

        <br></br>

        <a className='proj-link' href='https://aliasgame.xyz' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button id='acc-4' class="accordion" onClick={() => { accClick('acc-4') }}>Counting.exe</button>
      <div class="panel">
        <p>The Twitter bot that counts once a day, that's it.</p>

        <br></br>

        <a className='proj-link' href='https://twitter.com/countingdotexe' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-5' class="accordion" onClick={() => { accClick('acc-5') }}>Collatz Collab</button>
      <div class="panel">
        <p>The collaborative project to solve the hardest math problem ever.</p>

        <br></br>

        <a className='proj-link' href='https://collatzcollab.com' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-6' class="accordion" onClick={() => { accClick('acc-6') }}>Snake</button>
      <div class="panel">
        <p>The classic snake game in your browser</p>

        <br></br>

        <a className='proj-link' href='https://snake.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button id='acc-7' class="accordion" onClick={() => { accClick('acc-7') }}>Pong</button>
      <div class="panel">
        <p>The classic Pong game, in your browser!</p>

        <br></br>

        <a className='proj-link' href='https://pong.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button id='acc-8' class="accordion" onClick={() => { accClick('acc-8') }}>Typing Game</button>
      <div class="panel">
        <p>A fun game to test your typing skills</p>

        <br></br>

        <a className='proj-link' href='https://typing.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button id='acc-9' class="accordion" onClick={() => { accClick('acc-9') }}>Collatz Calculator</button>
      <div class="panel">
        <p>An algorithm to test numbers against the rules of the Collatz Conjecture</p>

        <br></br>

        <a className='proj-link' href='https://github.com/dickeyy/Collatz-Calculator' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-10' class="accordion" onClick={() => { accClick('acc-10') }}>Spacebar Tester</button>
      <div class="panel">
        <p>A game to spam your spacebar as much as you can.</p>

        <br></br>

        <a className='proj-link' href='https://spacebar.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button id='acc-11' class="accordion" onClick={() => { accClick('acc-11') }}>Mountain SVG</button>
      <div class="panel">
        <p>A cool SVG art of some mountains and ducks</p>

        <br></br>

        <a className='proj-link' href='https://mountains.dickey.gg' target="_blank" rel="noreferrer">View</a>
      </div>

      <button id='acc-12' class="accordion" onClick={() => { accClick('acc-12') }}>DVD Animation</button>
      <div class="panel">
        <p>Watch the DVD logo bounce and try to hit the corners, in your browser</p>

        <br></br>

        <a className='proj-link' href='https://dvd.dickey.gg' target="_blank" rel="noreferrer">View</a>
      </div>

      <button id='acc-13' class="accordion" onClick={() => { accClick('acc-13') }}>Dickey API</button>
      <div class="panel">
        <p>Dickey API is a free open source web API that does a variety of things</p>

        <br></br>

        <a className='proj-link' href='https://api.dickey.gg' target="_blank" rel="noreferrer">View Docs</a>
      </div>

      <button id='acc-14' class="accordion" onClick={() => { accClick('acc-14') }}>Wordle Clone</button>
      <div class="panel">
        <p>A from scratch clone of the popular game Wordle</p>

        <br></br>

        <a className='proj-link' href='https://wordle.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button id='acc-15' class="accordion" onClick={() => { accClick('acc-15') }}>Seeds</button>
      <div class="panel">
        <p>The easiest to use bot on Discord</p>

        <br></br>

        <a className='proj-link' href='https://seedsbot.xyz' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-16' class="accordion" onClick={() => { accClick('acc-16') }}>Jams</button>
      <div class="panel">
        <p>The best music bot on Discord</p>

        <br></br>

        <a className='proj-link' href='https://jamsbot.com' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button id='acc-17' class="accordion" onClick={() => { accClick('acc-17') }}>Spotinder</button>
      <div class="panel">
        <p>Tinder... But for Spotify songs.</p>

        <br></br>

        <a className='proj-link' href='https://spotinder.dickey.gg' target="_blank" rel="noreferrer">Find New Songs</a>
      </div>

      <button id='acc-18' class="accordion" onClick={() => { accClick('acc-18') }}>Spotify HL</button>
      <div class="panel">
        <p>The higher lower game but for Spotify stats</p>

        <br></br>

        <a className='proj-link' href='https://sphl.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      
      <br></br>
      <br></br>

      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='footer'>
        <span className='footer-p'>&copy; 2022 Kyle Dickey</span>

        <div className='footer-links'>
          <a href='mailto: kyle@dickey.gg' className="fa fa-solid fa-envelope fa-2x socialIcon-foot"> </a>

          <a href='https://twitter.com/kyledickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-twitter fa-2x socialIcon-foot"> </a>

          <a href='https://instagram.com/kyle.dickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-instagram fa-2x socialIcon-foot"> </a>

          <a href='https://github.com/dickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-github fa-2x socialIcon-foot"> </a>

          <a href='https://twitch.tv/imdickey' target="_blank" rel="noreferrer" className="fa fa-brands fa-twitch fa-2x socialIcon-foot"> </a>
        </div>

      </div>

      <br></br>

    </div>
  );
}




export default HomePage;


function accClick(id) {
  // var acc = document.getElementsByClassName("accordion");
  // var i;

  // for (i = 0; i < acc.length; i++) {
  //   acc[i].classList.toggle('active')
  //   var panel = acc[1].nextElementSibling;
  //   if (panel.style.display === "block") {
  //     panel.style.display = "none";
  //   } else {
  //     panel.style.display = "block";
  //   }

  var acc = document.getElementById(id);

  acc.classList.toggle('active');
  var panel = acc.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }

    // acc[i].addEventListener("click", function() {
    //   this.classList.toggle("active");
    //   var panel = this.nextElementSibling;
    //   if (panel.style.display === "block") {
    //     panel.style.display = "none";
    //   } else {
    //     panel.style.display = "block";
    //   }
    // });
  // }
}