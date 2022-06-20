Hola lu, como va?  te envio la primera entrega del proycto final. Te hago una pequeña aclaracion:
En el ItemListContainer tengo un useEffect que hace un fetch, yo puse para que vuelva a hacer el fetch cada vez que cambia el ID, pero no estoy seguro que eso sea lo mas optimo.

Probe poner los productos en un array aparte, que no sea el "productList" y usar un useEffect aparte, que monitoree el ID y ejecute la funcion "checkCategoria", y todo funcionaba bien, excepto por el primer click. El primer click nunca reaccionaba, porque se ve que no deteca el cambio en el ID. Ya que este todavia no existe cuando estas en Home. 

Sin embargo si hago que el ID se monitoree en el primer useEffect, funciona perfecto. Lo cual para mi no tiene mucho sentido. Pero bueno, jajaja hice lo mejor que pude. 

PD la imagen del auricular quedo horrible, pero ya voy a buscar otra jajaja
