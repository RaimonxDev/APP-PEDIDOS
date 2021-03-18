'use strict';


/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

module.exports = () => {

  var convert = require('xml-js');
  var xml = require('fs').readFileSync('./data/productos.xml', 'utf8');

  var result = convert.xml2json(xml, {compact: true, spaces: 2});
  const data = JSON.parse(result)

  // data.root.element.forEach(element => {
  //   // console.log(element.id._text);
  //   strapi.services.products.create({
  //     code: element.id._text,
  //     code_uid: element.id._text,
  //     producto: element.producto._text,
  //     marca: element.marca._text,
  //     peso: element.peso._text,
  //     mascota: element.mascota._text,
  //     valorNeto: element.valorNeto._text,
  //     precioSugerido: element.precioSugerido._text,
  //     disponible: element.disponible._text,
  //     isNewProduct: element.isNewProduct._text,
  //   })
  // });
  // data.root.element.forEach(element => {
  //   console.log(element.isNewProduct)
  // });
  // console.log(data.root.element);



};
