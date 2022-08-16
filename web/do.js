addtodolist();

function addtodolist(){
    //get json data from store.php
    
    fetch("get.php")
    .then((response) => response.json())
    .then((json) => {
      
        masivs=json;
        console.log("sis ir masivs"+masivs);
        console.log("sis ir masiva garums"+Object.keys(masivs).length);
        
        if(Object.keys(masivs).length>1){
        //generate list from array
        generate();
        }
})
    ;
  }
//function to generate list from array
  function generate(){
    
    for (i=0; i<Object.keys(masivs).length;i++){
      // izveido "task" sarakstu ar vertibu
      document.getElementById('tasks').innerHTML +=`
      <div class="task">
          <div id="taskname">
              ${masivs[i]}
          </div>
          <button class="delete">
          X
          </button>
       </div>     
  `;
   }
  }

