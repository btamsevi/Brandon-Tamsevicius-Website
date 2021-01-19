import profilePhoto from './profileFull.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePhoto} className="profilePhoto" alt="Brandon Tamsevicius"/>
        <h1 className="Website-title">Brandon Tamsevicius' Resume Website</h1>
      </header>
      <body className="App-body">
        <h2>
          Summary:
          </h2>
          <p>Brandon is a freelance Software Engineer currently seeking full-time employment. 
          After graduating with an Economics degree from DePaul University, Brandon taught himself Software Engineering 
          and Computer Science.
          With the help of online courses, an experienced mentor, and dedicated self-study - 
          Brandon was able to learn to compete alongside software engineers (many of who are formally educated) on 
          TopCoder. Currently, he is rated in the top 40% of competitors on the platform.</p>
          <h2>Programming Experience</h2>
          <h3>Topcoder</h3>
          <ul>
            <li>Ranked 1332 out of 3700+ rated competitors (top 40%)</li>
            <li>Granted 3rd place in web application feature challenge</li>
            <li>Deployed web application to Heroku hosting platform</li>
          </ul>
          <h3>GitHub</h3>
          <h4>Dotnet/Docs</h4>
          <ul>
            <li>Contributed minor corrections to C# official documentation</li>
          </ul>
          <h4>Lifestyle Manager Progressive Web App</h4>
          <ul>
            <li>Developed and integrated front-end React application with back-end CRUD API</li>
            <li>Implemented OAuth 2.0 protocols to ensure secure authentication and authorization</li>
            <li>Versioned project via Git to ensure application updates remain manageable</li>
            <li>Secured sensitive information by salting and encrypting stored passwords</li>
            <li>Integrated application with Azure Cosmos DB for cloud-hosted storage</li>
          </ul>
        </body>
    </div>
  );
}

export default App;
