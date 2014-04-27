Cómo utilizar
=============


### Prerequisitos

Tener instalado nodejs.

### Instalación

Ejecutar en la consola

`npm install -g grunt-cli`

Luego en la misma consola ejecutar

`grunt init`

Eso instalará las dependencias

### Crear un nuevo post

Ejecutar

`./jekyll-post.py "Titulo del Post"`

Eso creará un archivo markdown en el directorio app/_posts/ dicho archivo puede editarse utilizando [Mou](http://mouapp.com)

### Visualizar los cambios en el sitio
Simplemente ejecutar en consola

`grunt serve`

Eso mostrará en el navegador el sitio incluyendo todos los cambios en forma "real-time"

### Publicación de cambios
Para alamecenar los cambios, primero se debe hacer un **commit** y **subir** al repositorio. Esto puede hacerse vía consola o la aplicación de Github.

`git add . --all && git commit -am 'Mensaje indicando los cambios'`

Una vez subido los cambios al repositorio, es necesario hacer **deploy** de los posts, para eso simplemente ejecutar en consola:

`grunt deploy`

Listo! ir a [Munki.cl](http://www.munki.cl) y visualizar los cambios