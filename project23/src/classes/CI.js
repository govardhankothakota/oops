import SI from "./SI";

class CI extends SI {
  constructor() {
    super();
    console.log("Inside CircleInspector Constructor");
  }
  rank = () => {
    console.log("Rank : Higher rank, above Sub-Inspector.");
  };
  primaryRole = () => {
    console.log(
      "PrimaryRole : Supervise multiple police stations within a circle, ensure effective policing."
    );
  };
  interactionWithPublic = () => {
    console.log(
      "Interaction With Public : Limited direct interaction, more focused on supervision and management."
    );
  };
  exampleTasks = () => {
    console.log(
      "ExampleTasks : Reviewing case files, conducting inspections, managing police resources."
    );
  };
}
export default CI;
