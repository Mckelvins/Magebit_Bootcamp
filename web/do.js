

  function addtodolist(event){
    
    
    event.preventDefault();
    fetch("store.php")
    .then((response) => response.json())
    .then((json) => {
      
      masivs=json;
      console.log("sis ir masivs"+masivs);
      generate();

    
    })
    ;

    
    console.log("get back data");
    console.log(masivs);
    
  }

  function generate(){
    
    for (i=0; i<masivs.lenght;i++){
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