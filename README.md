Proyecto de entrevista Aktios - Manuel Junquera Martínez

Para arrancar el proyecto:
> npm i
<br />Para desplegarlo en local y visualizarlo en el navegador: <br />
> ng serve

Si deseas arrancar el proyecto en un emulador o dispositivo android
> ionic cordova run android
<br />o<br />
> ionic cordova run android --device

Si deseas arrancar el proyecto en un emulador o dispositivo ios
> ionic cordova run ios
<br />o<br />
> ionic cordova run ios --device
<br/>

Versiones para despliegue en local:
Ionic: 6.20.3
Angular CLI: 15.2.8
Node: 19.6.0
Npm: 9.4.0

Versión desplegada:
https://entrevista-aktios.web.app/home

Propiedades de la aplicación:
- Se pueden buscar usuarios por nombre, apellidos, año de nacimiento, fecha completa de nacimiento o ciudad
- Scroll infinito con contador de resultados en el footer
- Detalle de tarjeta con diseño tipo popup y acceso directo para llamar a los usuarios
- Función para comprobar que la ruta a la imagen de perfil funcione correctamente y foto por defecto en caso en que la ruta esté rota
- Diseño diferente para android o ios (En la parte desplegada en el hosting solo aparece la de ios)
