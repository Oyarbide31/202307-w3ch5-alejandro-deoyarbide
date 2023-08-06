### Week 3 - Challenge WeekEnd

Logo Pokémon

Pokémon
Esta aplicación tendrá tres páginas:

Todos los pokémon
Detalle de pokémon
El listado de todos los pokémon se alimentará de la PokéAPI, y deberá ir paginado. El listado incluirá el nombre del pokemon y su imagen y deberá ir acompañado de dos botones, para avanzar y retroceder de página. También debe mostrar el total de pokèmon mostrados vs. el total de pokèmon que existen (p.e. 10/1000).

El usuario debería poder ir al detalle de un pokémon, donde se le mostrarán más datos. A esta página de detalle se llega pasando una id por la URL (la id del pokémon que queremos ver).

Extra
Añadir una tercera página:

Mis pokémon
El usuario debe poder añadir los pokémon que quiera a su listado local. El listado de Mis pokémon se alimentará de [una API local]. El usuario debería poder eliminar pokémon de su listado local, y también modificar algún/unos dato/s.

Desde los favoritos, también se puede acceder a la página de detalle.

Features
Opcional: BEM + sass Vite HTML semántico Testing

---

1º He creado el header, le faltan los estilos
2º He creado el footer, le faltan los estilos tambien ( no se por que le pase size 50 y no se me queda reducido)

3º Vamos a tratar de lograr llamar al servidor de los pokemons.
Desgranandolo:

    3.1 Tenemos el componente Carta
    3.2 Tendremos que tener en algun sitio la llamda a esa base de datos
    3.3 ¿que vamos a tener dentro? una tarjeta pokemon, por lo que tendremos que tener un objeto CartaPokemon
    creado al que luego le puedes dar los estilos.
