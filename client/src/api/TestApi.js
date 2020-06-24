import TestApiGenerated from "./generated/TestApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TestApi extends TestApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Test List
  static getTestList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/tests")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TestApi;