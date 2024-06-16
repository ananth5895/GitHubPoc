/* Imperative Apex: This method allows you to call Apex methods imperatively using JavaScript code.
You make a client-side call to the server to invoke the Apex method and handle the response asynchronously. */
import { LightningElement, track, api } from 'lwc';
import apexMethod from '@salesforce/apex/AccountUtility.viewAnnualRevenue'

export default class WebStackLwc extends LightningElement {
    @track datas;
  // @api bike;
  @api company = 'Technorcs';
   
   // disconnectedCallback() {
   //    console.log("this is disconnectedCallback")
   // }
   @api greeting = 'Hello';

   @api
   sayHello(name) {
       return `${this.greeting}, ${name}!`;
   }

   constructor() {
      super();
      console.log(new Date());
   }
   connectedCallback() {
      apexMethod()
         .then(result => {
            console.log("result = ", result);
            datas = result;
         })
         .catch(error => {
            console.log("error = ", error);
         });
   }
 /*  constructor() {
      super();
      console.log("this is constructor 1")
   }
   renderedCallback() {
      console.log("this is renderedcall back 2");
   }
*/
}