import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" id='home'>
      <header className="App-header">
        <nav id='nav-bar'>
      <ul>
        <li><a href="#home" className='nav-link'>Home</a></li>
        <li><a href="#project" className='nav-link'>Project</a></li>
        <li><a href="#office" className='nav-link'>Office</a></li>
        <li><a href="#tourist" className='nav-link'>Tourist</a></li>
      </ul>
      </nav>
      </header>

      <body>
      <h1>One Vanderbilt</h1>

    <div className='project-container'>
      <div id='project'>
        <h3> Project Overview </h3>
        <div className='image'> 
         <img width={300} 
         height={400} 
         src='ov-split.jpg' 
         alt='one vanderbilt' />
        </div>
        <div className='text'>
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum. 
         </p>
         </div>
     
        </div>
        </div>

        <section id='office'>
        <div className='project-container '>

        <h3> Office </h3>
        <p className='left-para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        </p>
        </div>

        </section>

      <section id='tourist'>
      <div className='project-container '>

        <h3> Tourist </h3>
        <p className='left-para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
        </p>
        <div className='video'>
        </div>
        </div>
        </section>

    </body>

    </div>
  );
}

export default App;
