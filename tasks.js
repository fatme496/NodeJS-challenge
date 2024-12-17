
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
  else if(text.split(" ")[0] === 'add' && text.split(" ").length == 1){
    console.log("Error message: You should add a task :)");
  }
  else if(text.split(" ")[0] === 'add'){
    add(text.replace("add",""));
  }
  else if(text.split(" ")[0] === 'remove'){
    remove(text);
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
   console.log('All possible commands: \nhello\nquit\nexit\nunknownCommand\n');
}
/**
 * 
 * Lists all tasks added
 */
function list(Array){
  for(let i = 0; i< Array.length ; i++){
    console.log((i+1)+" - [ ] "+ Array[i])
  }
}
let Array=[];
/**
 * 
 * Add a task
 */
function add(text){
  Array.push(text);
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
  else{
    for(let i=0; i<Array.length ; i++){
      if(i == Number(tab[1])){
        Array.splice(i-1,1);
        break;
      }
    }
  }
}

// The following line starts the application
startApp("Fatme Said")
