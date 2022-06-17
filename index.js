function askForInput(){
    let words = [];
    while(true){
        const message = prompt('Enter your word');
        
        if (message === "" || message === null) break;
          
        words.push(message);  
    }

   const upperCasedArray = words.map((string) =>{
        return `${string[0].toUpperCase()}${string.slice(1)}}`;  
   });
   
   const sortedArray = upperCasedArray.sort((first, second) =>{
       return first.length - second.length;
   });
    return sortedArray;
}
askForInput();
console.log(askForInput());