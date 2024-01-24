import logo from './logo.svg';
import './App.css';
import FuncComp from './FuncComp';
import ClassComp from './ClassComp';
import Counter from './Counter';
import StylingsComp from './Components/stylings/StylingsComp';
import ListsandKeys from './Components/stylings/ListsandKeys';
import Header from './Components/Header';
import Routing from './Components/Routing';
import UseRefHook from './Components/Hooks/UseRefHook';

function App() {
  {/* 
      components are classified into two types
        - functional component
        - class component
      */}
      const courseSkills = ['html', 'css', 'javascript', 'react']
  return (
    <div className="App">
        <Header />
        <UseRefHook />
        {/* <Routing /> */}

      {/* <h2>welcome to React</h2>
      <FuncComp courseName='ReactJs' duration="3Months" courseSkills={courseSkills} />
      <ClassComp courseName='AngularJs' duration="4Months" /> */}
      {/* <Counter /> */}
    {/* <ClassComp courseName='AngularJs' duration="4Months" /> */}
      {/* <StylingsComp /> */}
      {/* <ListsandKeys /> */}
    </div>
  );
}

export default App;
