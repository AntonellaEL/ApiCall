const llamandoAPI = async () => {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respuesta.json(); 
    
    const tbody = document.getElementById('usuarios').getElementsByTagName('tbody')[0];

    data.forEach(user => {
      const fila = document.createElement('tr');

      const celdaID = document.createElement('td');
      celdaID.textContent = user.id;
      fila.appendChild(celdaID);

      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = user.name;
      fila.appendChild(celdaNombre);

      const celdaCiudad = document.createElement('td');
      celdaCiudad.textContent = user.address.city;
      fila.appendChild(celdaCiudad);

      tbody.appendChild(fila);
    });
  } catch (error) {
    console.log(error);
  }
}

const buscarUsuario = async () => {
  const userId = document.getElementById('userIdInput').value;
  if (!userId) {
    alert('Por favor ingrese un ID');
    return;
  }

  try {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await respuesta.json();

    if (respuesta.ok) {
      const userInfo = document.getElementById('userInfo');
      userInfo.textContent = `Nombre: ${user.name}, Teléfono: ${user.phone}`;
    } else {
      alert('Usuario no encontrado');
    }
  } catch (error) {
    console.log(error);
  }
}

llamandoAPI();
