 window.addEventListener("click", (event) =>{
     const payload = {
         search: event.target.id
     }
    // console.log(event.target.id)
     fetch("http://localhost:3001/recipe/")
    //  , {
    //      method: "GET",
    //      headers: {
    //          'Content-Type': 'application/json',
            
    //      },
    //      body: event.target.id
    //  })
});

