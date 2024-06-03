import logo from "./logo.svg";
import "./App.css";
import SI from "./classes/SI";
import Conistable from "./classes/Conistable";
import CI from "./classes/CI";

function App() {
  console.log("About CircleInspector=>");
  let circleInspector = new CI();
  console.log(circleInspector.workPlace);
  console.log(circleInspector.uniform);
  console.log(circleInspector.theme);

  circleInspector.rank();
  circleInspector.primaryRole();
  circleInspector.interactionWithPublic();
  circleInspector.exampleTasks();

  

  console.log("About SubInspector=>");
  let subInspector = new SI();
  console.log(subInspector.workPlace);
  console.log(subInspector.uniform);
  console.log(subInspector.theme);

  subInspector.rank();
  subInspector.primaryRole();
  subInspector.interactionWithPublic();
  subInspector.exampleTasks();



  console.log("About Conistable=>");
  let policeConistable = new Conistable();
  console.log(policeConistable.workPlace);
  console.log(policeConistable.uniform);
  console.log(policeConistable.theme);

  policeConistable.rank();
  policeConistable.primaryRole();
  policeConistable.interactionWithPublic();
  policeConistable.exampleTasks();

  return <div className="App"></div>;
}

export default App;
