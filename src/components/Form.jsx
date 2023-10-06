import { useState } from 'react';

const Form = () => {
  // const pruchaseId = "jxdefs"
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [pruchaseId, setPruchaseId] = useState("")
  const pruchaseId = 'my gato';

  console.log(name);

  // funtion
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    // name === "" ? alert("Exist fields empty") : alert(name)
    // email === "" ? alert("Exist fields empty") : alert(email)
    name === '' || email === ''
      ? alert('Exist fields empty')
      : alert(`registrado con el nombre ${name} con correo electronico ${email}`); // conditional if hasta : despues de : va el else
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      {/* Renderizado conditional */}
      {pruchaseId === '' ? <p>No has enviado informacion</p> : <p>Tu compra se realizo con el ID: {pruchaseId}</p>}
    </>
  );
};

export default Form;
