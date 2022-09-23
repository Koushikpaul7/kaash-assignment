import logo from './logo.svg';
import './App.css';
import Bannner from './Components/Home/Bannner';
import Content from './Components/Home/Content';
import ProjectIdea from './Components/Home/ProjectIdea';
import Contact from './Components/Home/Contact';
import ExtraSection from './Components/Home/ExtraSection';


function App() {
  return (
    <div>
      <Bannner/>
      <Content/>
      <ProjectIdea/>
      <ExtraSection/>
      <Contact/>
    </div>
  );
}

export default App;
