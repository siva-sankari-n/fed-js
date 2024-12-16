//JSON - JavaScript Object Notation

/*JSON is used to send and receive data 
 JSON is a text format that is completetly language independent
 Meaning JSON is used to send & receive data in many languages
 ...not just in javascript*/

 const myObj={
    name:"Dave",
    hobbies:["eat" ,"sleep","code"],
    hello: function(){
        console.log("Hello!");
    }
 };

 console.log(myObj)
 console.log(myObj.name)
 myObj.hello();
 console.log(typeof myObj);

 const sendJSON =JSON.stringify(myObj);
 console.log(sendJSON)
 console.log(typeof sendJSON);
 console.log(sendJSON.name);

const reeiveJSON= JSON.parse(sendJSON);
console.log(reeiveJSON);
console.log(typeof reeiveJSON)