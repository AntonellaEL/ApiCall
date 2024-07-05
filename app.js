const llamandoAPI = async () => {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
  
      const data =  respuesta.json()
      console.log(data)
  
    } catch (error) {
      console.log(error);
    } 
  }
  
  llamandoAPI()