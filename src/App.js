import logo from './logo.svg';
import './App.css';
import officevid from './assets/ov-office.mp4';
import touristvid from './assets/ov-tourist.mp4';

function App() {
  return (
    
    <div className="App" id='home'>
      <div class="bg-fixed bg-cover h-[600px] w-[100%] bg-[url('https://img.nmcdn.io/e1/w:1500,h:750,v:1/kpfwp/wp-content/uploads/imported-files/ov-image-hero-scaled.jpg?s=5db26a6f')]">
      
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
     
      </div>
      <body>
      {/* <h1>One Vanderbilt</h1> */}

    {/* Project Overview 100 years */}
    <div className='project-container'>
      <div class='pt-10' id='project'>
        <h1> 100 Years in the Making </h1>
        <div className='image'> 
         <img class='pr-9' width={400} 
         height={500} 
         src='ov-split.jpg' 
         alt='one vanderbilt' />
        </div>
        <div className='text'>
         <p>
         Concrete and steel foundations are beginning to shape Midtown’s newest tower. 
         Many New Yorkers are aware of the dramatic, new addition coming to our city’s skyline, 
         but less apparent are the bold urban initiatives that One Vanderbilt represents and its 
         tribute to the site’s influential past. One Vanderbilt continues a legacy of “superior 
         design,” Transit Oriented Development (TOD), and a relationship between the public and 
         private sectors.
         <p></p>
         <p></p>
        <p>
        The prequel to One Vanderbilt’s story began more than 100 years ago with one of the 
        most ambitious undertakings in the history of New York City development.
         </p>
        </p>
         </div>
        </div>
        </div>

         {/* Office */}
        <section id='office'>
        <div class="bg-fixed bg-cover h-[400px] w-[100%] bg-[url('https://data.openasset.com/2ud9jaa/1a2ae5b005a4836a0d3a8e5d8b39176f/1943_1_000_N2265_tif/1943_1_000_N2265_large.jpg')]">
        <div class='pt-20'>
        <h3> Office of the Future </h3>
        </div>
        </div>

        <div className='project-container '>

        <div className='video pr-9'> 
       
        
        
        <p className='text'>
        Urban transformation in New York is historically rooted in commercial enterprise. 
        As Grand Central once opened a door for unparalleled economic stimulation, 
        the city is facing a new challenge – the need to adapt to an 
        increasingly global marketplace with vastly changing expectations. 
        A focus on resiliency, an interconnected built environment, and an 
        updated building stock with the latest technologies are increasingly 
        expected. Strategies like the East Midtown Rezoning Plan will incentivize 
        development and support a list of growing demands.
        </p>
        <video
        src={officevid} 
        width="400" 
        height="400" 
        controls="controls" 
        autoPlay='false'
        class='pr-9' />
        </div>
        </div>
        

        </section>

      <section id='tourist'>
      <div class="bg-fixed bg-cover h-[400px] w-[100%] bg-[url('https://data.openasset.com/2ud9jaa/92bdccbddf2e3760f4ea681f770d9ad2/1943_1_000_N2260_tif/1943_1_000_N2260_large.jpg')]">
      <div class='pt-20'>
      <div className='project-container '>
     
     {/* TOURIST SECTION */}
        <h3> Scenes for Everyone </h3>
        </div>
      </div>
      </div>
      <div className='project-container '>

        <div className='video pr-9'> 
       
        <video
        src={touristvid} 
        width="400" 
        height="400" 
        controls="controls" 
        autoPlay='false'
        class='pr-9' />

        <p className='text'>
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
        
        </section>

    </body>
    </div>
  

  );
}

export default App;
