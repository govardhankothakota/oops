class SI{
    constructor(){
        console.log("Inside SubInspector Contructor")
        
        this.workPlace = "Working in Police Station"
        this.uniform = "khaki dress"
        this.theme = "to maintain public safety and order through law enforcement, crime prevention, and community service."   
    }

    rank = ()=>{
        console.log("Rank :Higher rank within the police hierarchy.")
    }
    primaryRole = ()=>{
        console.log("PrimaryRole : in maintaining law and order, conduct investigations, supervise constables.")
    }
    interactionWithPublic = ()=>{
        console.log("Interaction With Public : Frequent direct interaction, handles more complex situations and complaints.")
    }
    exampleTasks = ()=>{
        console.log("ExampleTasks : Investigating crimes, filing charge sheets, supervising police activities.")

    }
}

export default SI;

