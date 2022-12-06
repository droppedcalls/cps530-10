import './App.css';
import React from 'react';

function App() {
  let tutorial = "https://reactjs.org/docs/create-a-new-react-app.html#create-react-app";
  let netlify = "https://www.netlify.com";
  let netlifyCustom = "https://docs.netlify.com/domains-https/netlify-dns/delegate-a-subdomain-to-netlify-dns/";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Bill!</h1>
      </header>

      <div className="App-body">
        <p>
          This is a React web page built by following the <a href={tutorial} className='App-link'>official React app tutorial</a>. (I already had Node.js installed)<br/>
          The app was then pushed onto a GitHub repository, which is then pulled from by <a href={netlify} className='App-link'>Netlify</a> and deployed to the current server.
        </p>
        <h3>Problems and difficulties</h3>
        <p>
          All in all, I didn't run into many problems building the page, likely because the page itself is simple. The tutorials were simple and straightforward.
        </p>
        <p>
          One issue I had was that the first build I did failed; this was because there was an unused import warning in my <code>App.js</code>, which is apparently
          considered an error on build. The only thing I had to do to fix that was to remove the import.
        </p>
        <p>
          The most unfamiliar part for me was learning how to deploy the app onto the Netlify server and linking my own domain to Netlify,
           mainly because I was unfamiliar with it. Thankfully, Netlify guides you step by step through the process, 
           and there are <a href={netlifyCustom} className='App-link'>knowledge base articles</a> on 
           how to set up your custom domain with Netlify.
        </p>
        <h3>Conclusion</h3>
        <p>
          Ultimately, using React to build a simple webpage like this is probably overkill (can just use plain HTML/CSS).
        </p>
      </div>

      <footer className="App-footer">
        <hr />
        <p>Designed by <a href="mailto:bill.wang@ryerson.ca" className="App-link">Bill Wang</a>, 
            for <a href="https://www.cs.ryerson.ca/~cps530/" className="App-link">CPS530</a>, 
            Fall 2022, Lab 10</p>
      </footer>
    </div>
  );
}

export default App;
