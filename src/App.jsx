function App() {
  const persona = {
    nombre: "Diana Laura",
    apellidoPaterno: "Chavez",
    apellidoMaterno: "Jeronimo",
    edad: 22,
  };

  const nuevoTelefono = "2871829782"

  const { nombre,
    apellidoPaterno,
    apellidoMaterno,
    edad
  } = persona;
  
  const contactoPersona = {
    telefono : "2871829782",
    email : "isc18350285@gmail.com",
    empresa : "ITTUX",
  }

  const infoPersona = {
    ...persona,
    ...contactoPersona,
    puesto: "estudiante",
    nuevoTelefono
  };

  /*
  console.log (persona);
  console.log (contactoPersona);
  console.log (infoPersona);
*/
  const frutas = ["manzana", "naranja", "fresa", "pera"];
  const vegetales = ["lechuga", "zanahoria", "alcachofa"];
  const carnes = ["res", "cerdo", "pollo", "pescado"];

  const alimentos =[
    ...frutas,
    ...vegetales,
    ...carnes,
    "Cualquier otro alimento"
  ];

  console.table (frutas);
  console.table (vegetales);
  console.table (carnes);
  console.table (alimentos);
  
  return (
  <div className = "App">
    <h3>
      {`Soy ${nombre}
        ${apellidoPaterno}
        ${apellidoMaterno}
        y tengo
        ${edad}
        años.`
       }
     </h3>
  </div>);
}

export default App;
