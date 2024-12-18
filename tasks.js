
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  console.log(text);
  text = text.trim();
  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if(text.split(" ")[0] === 'hello'){
    hello(text);
  }
  else if(text === 'help'){
    help();
  }
  else if(text === 'list'){
    list(Array);
  }
  else if(text.split(" ")[0] === 'add'){
    add(text);
  }
  else if(text.split(" ")[0] === 'remove'){
    remove(text);
  }
  else if(text.split(" ")[0] === 'edit'){
    edit(text);
  }
  else if(text.split(" ")[0] === 'check'){
    check(text);
  }
  else if(text.split(" ")[0] === 'uncheck'){
    uncheck(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text +'!')
}


/**
 * 
 * Exits the application
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * 
 * Lists all the possible commands
 */
function help(){
   console.log('All possible commands: \nhello\nquit\nexit\nlist\nadd\nremove\nedit\ncheck\nuncheck\nunknownCommand\n');
}
/**
 * 
 * Lists all tasks added
 */
function list(Array){
  for(let i = 0; i< Array.length ; i++){
    let msg = (i+1)+" - [";
    if(Array[i][1] == "true"){
       msg+="✓";
    }
    else{
       msg+=" ";
    }
    msg+="] "+ Array[i][0];
    console.log(msg);
  }
}
let Array=[];
/**
 * 
 * Add a task
 */
function add(text){
  if(text.split(" ").length == 1){
    console.log("Error message: You should add a task :)")
  }else{
    text = text.replace("add ","")
    Array.push([text,"false"]);
  }
}
/**
 * 
 * Remove elements from the list of tasks
 */
function remove(text){
  let tab = text.split(" ");
  if(tab.length == 1){
    Array.pop();
  }
  else if(Number(tab[1])>Array.length){
      return console.log("You entered a number that does not exist:)");
  }
  else{
    for(let i=0; i<Array.length ; i++){
      if(i+1 == Number(tab[1])){
        Array.splice(i,1);
        break;
      }
    }
  }
}
/**
 * 
 * Edit a task
 */
function edit(text){
  let arr=text.split(" ");
  if(arr.length == 1){
    console.log("Error message: Specify your new text to edit a task:)");
  }
  else if(Number(arr[1])>Array.length){
    return console.log("You entered a number that does not exist:)");
  }
  else if(!isNaN(Number(arr[1]))){
    for(let i=0; i<Array.length  ;i++){
      if(i+1 == Number(arr[1])){
        Array[i].splice(0,1,text.substring(text.indexOf(" ",5)).trim());
        break;
      }
    }
  }
  else{
    Array[Array.length -1].splice(0,1,text.substring(text.indexOf(" ",5)).trim());
  }
}
/**
 * 
 * Check tasks
 */
function check(text){
  let tab = text.split(" ");
  if(tab.length == 1){
    console.log("Error message: You should mention which task you want to check:)")
  }
  else if(Number(tab[1])>Array.length){
    return console.log("You entered a number that does not exist:)");
  }
  else{
    let num=Number(text.split(" ")[1]);
    for(let i in Array){
      if(num-1 == i){
        Array[i][1]= "true";
        console.log("task "+ num +" is marked as checked :)")
        break;
      }
    }
  }
}
/**
 * 
 * Uncheck tasks
 */
function uncheck(text){
  let tab = text.split(" ");
  if(tab.length == 1){
    console.log("Error message: You should mention which task you want to uncheck:)")
  }
  else if(Number(tab[1])>Array.length){
    return console.log("You entered a number that does not exist:)");
  }
  else{
    let num=Number(text.split(" ")[1]);
    for(let i in Array){
      if(num-1 == i){
        Array[i][1]= "false";
        console.log("task "+ num +" is marked as unchecked :)")
        break;
      }
    }
  }
}
// The following line starts the application
startApp("Fatme Said")
