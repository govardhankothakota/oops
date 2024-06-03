import SI from "./SI";

class Conistable extends SI {
  constructor() {
    super();
    console.log("Inside Conistable Constructor");
  }

  rank = () => {
    console.log("Rank :Entry-level rank in the police force.");
  };
  primaryRole = () => {
    console.log(
      "PrimaryRole : Perform basic policing duties such as patrolling, maintaining order, and assisting higher-ranking officers."
    );
  };
  interactionWithPublic = () => {
    console.log(
      "Interaction With Public : Regular direct interaction, handles routine tasks and assists the public."
    );
  };
  exampleTasks = () => {
    console.log(
      "ExampleTasks :Patrolling neighborhoods, manning police posts, assisting in crime scenes, basic administrative work."
    );
  };
}

export default Conistable;
