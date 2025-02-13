**Dekalabs Frontend Challenge**

/Lanzar Projecto/

**ejecutar**

`pnpm install`
`pnpm run dev`

==> Acceder a [localhost](http://localhost:5173/) y escribir una cadena de texto en el input

**Descripción**

He realizado la prueba con Typescript, React y Tailwind.
Para iniciar el proyecto he usado una plantilla de la comunidad de Vite que lo inicializa con ReactTs Tailwind y eslint. Adicionalmente he instalado Axios como dependencia.

He creado una estructura de carpetas que permiten cierta escalabilidad en el código y he seguido los principios SOLID.

**Requisitos funcionales**

He creado un modelo ICocktail para operar con los datos del cocktail que necesitamos.

Como componentes he creado un CocktailsList que recibe un array de Icocktails y mediante un map renderiza un grid de CocktailCard, que es el componente que recibe un ICocktail y renderiza la tarjeta con los datos requeridos.

Para hacer la llamada a la API he creado un servicio que manipula los datos y los entrega ya transformados de acuerdo al modelo.

**Opcionales**

He añadido el buscador con un debounce hecho como custom hook para evitar llamadas innecesarias.

También he añadido el botón de favoritos y la opción de mostrar primero los favoritos. Incluso si se borra el valor del input se seguirán mostrando los cocktails marcados como favoritos.

Para lograr cierta permanencia he hecho un contexto donde almacenar los cocktails favoritos en un array, el cual es accesible para el componente FavComponent que añade o quita de favoritos y muestra la imagen adecuada.

Podría haber hecho uso del local storage para poder conserva la lista de favoritos al refrescar o reiniciar la app pero me parecía más interesante poder mostrar conocimientos de React como el useContext().

Finalmente y porque me ha llevado más de 2 horas no he querido hacer el modal, el cual hubiera hecho extendiendo el modelo. Haciendo el componente en si mismo y gestionando su renderización con un useState<boolean> desde un botón en el componente CocktailCard como dice el enunciado.
