import logo from './logo.svg';
import './App.css';
import Bannner from './Components/Home/Bannner';
import Content from './Components/Home/Content';
import ProjectIdea from './Components/Home/ProjectIdea';
import Contact from './Components/Home/Contact';


function App() {
  return (
    <div>
      <Bannner/>
      <Content/>
      <ProjectIdea/>
      <Contact/>
    </div>
  );
}

export default App;
