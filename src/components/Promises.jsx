// eslint-disable-next-line no-unused-vars
import React from 'react';

const Promises = () => {
  const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
      resolve('Descuento aplicado');
    } else {
      reject('No se pudo aplicar el descuento');
    }
  });

  // console.log(aplicarDescuento)

  aplicarDescuento
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>Promises</div>;
};

export default Promises;
