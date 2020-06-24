import actionsFunction from "./generated/TestActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import testApi from "../../api/testApi";
 
 actionsFunction.loadtestList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return testApi
     .gettestList()
     .then(list => {
       dispatch(actionsFunction.loadtestSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
