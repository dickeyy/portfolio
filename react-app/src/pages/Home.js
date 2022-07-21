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
        <a href='https://twitter.com/kyledickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-twitter fa-3x socialIcon"></a>

        <a href='https://instagram.com/kyle.dickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-instagram fa-3x socialIcon"></a>

        <a href='https://github.com/dickeyy' target="_blank" rel="noreferrer" className="fa fa-brands fa-github fa-3x socialIcon"></a>

        <a href='https://twitch.tv/imdickey' target="_blank" rel="noreferrer" className="fa fa-brands fa-twitch fa-3x socialIcon"></a>
      </div>

      </div>

      <br></br>

      <div className='project-container'>

      <p className='proj-title'>Projects</p>
      <p className='proj-subtitle'>Double click to expand (Not in any order)</p>

      <button class="accordion" onClick={() => { accClick() }}>DoxBot</button>
      <div class="panel">
        <p>The last Discord bot you'll ever need</p>

        <br></br>

        <a className='proj-link' href='https://doxbot.xyz' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>LasTag</button>
      <div class="panel">
        <p>The last gamer tag you'll ever need.</p>

        <br></br>

        <a className='proj-link' href='https://lastag.xyz' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Alias</button>
      <div class="panel">
        <p>The fun for all ages party game... Now modernized!</p>

        <br></br>

        <a className='proj-link' href='https://aliasgame.xyz' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Counting.exe</button>
      <div class="panel">
        <p>The Twitter bot that counts once a day, that's it.</p>

        <br></br>

        <a className='proj-link' href='https://twitter.com/countingdotexe' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Collatz Collab</button>
      <div class="panel">
        <p>The collaborative project to solve the hardest math problem ever.</p>

        <br></br>

        <a className='proj-link' href='https://collatzcollab.com' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Snake</button>
      <div class="panel">
        <p>The classic snake game in your browser</p>

        <br></br>

        <a className='proj-link' href='https://snake.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Pong</button>
      <div class="panel">
        <p>The classic Pong game, in your browser!</p>

        <br></br>

        <a className='proj-link' href='https://pong.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Typing Game</button>
      <div class="panel">
        <p>A fun game to test your typing skills</p>

        <br></br>

        <a className='proj-link' href='https://typing.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Collatz Calculator</button>
      <div class="panel">
        <p>An algorithm to test numbers against the rules of the Collatz Conjecture</p>

        <br></br>

        <a className='proj-link' href='https://github.com/dickeyy/Collatz-Calculator' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Spacebar Tester</button>
      <div class="panel">
        <p>A game to spam your spacebar as much as you can.</p>

        <br></br>

        <a className='proj-link' href='https://spacebar.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Mountain SVG</button>
      <div class="panel">
        <p>A cool SVG art of some mountains and ducks</p>

        <br></br>

        <a className='proj-link' href='https://mountains.dickey.gg' target="_blank" rel="noreferrer">View</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>DVD Animation</button>
      <div class="panel">
        <p>Watch the DVD logo bounce and try to hit the corners, in your browser</p>

        <br></br>

        <a className='proj-link' href='https://dvd.dickey.gg' target="_blank" rel="noreferrer">View</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Dickey API</button>
      <div class="panel">
        <p>Dickey API is a free open source web API that does a variety of things</p>

        <br></br>

        <a className='proj-link' href='https://api.dickey.gg' target="_blank" rel="noreferrer">View Docs</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Wordle Clone</button>
      <div class="panel">
        <p>A from scratch clone of the popular game Wordle</p>

        <br></br>

        <a className='proj-link' href='https://wordle.dickey.gg' target="_blank" rel="noreferrer">Play</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Seeds</button>
      <div class="panel">
        <p>The easiest to use bot on Discord</p>

        <br></br>

        <a className='proj-link' href='https://seedsbot.xyz' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Jams</button>
      <div class="panel">
        <p>The best music bot on Discord</p>

        <br></br>

        <a className='proj-link' href='https://jamsbot.com' target="_blank" rel="noreferrer">Learn More</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Spotinder</button>
      <div class="panel">
        <p>Tinder... But for Spotify songs.</p>

        <br></br>

        <a className='proj-link' href='https://spotinder.dickey.gg' target="_blank" rel="noreferrer">Find New Songs</a>
      </div>

      <button class="accordion" onClick={() => { accClick() }}>Spotify HL</button>
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
        <p>&copy; 2022 Kyle Dickey</p>
      </div>

      <br></br>

    </div>
  );
}




export default HomePage;


const accClick = () => {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}