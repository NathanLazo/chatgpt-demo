# Aplicación web con Next.js y la API de OpenAI
Esta aplicación web utiliza la API de OpenAI.

## Funcionalidades
* El modelo GPT-3.5 Turbo de OpenAI es utilizado para generar una respuesta y se devuelve al usuario en la interfaz de la aplicación.

## Tecnologías utilizadas
### La aplicación fue desarrollada utilizando las siguientes tecnologías:

* Next.js
* React
* Node.js
* API de OpenAI
* Modelo GPT-3.5 Turbo de OpenAI

## Requerimientos
Antes de utilizar la aplicación, es necesario tener una cuenta en OpenAI y tener acceso a la API de GPT-3.5 Turbo. Se deben crear las credenciales necesarias y agregarlas al archivo .env en el proyecto.

Instrucciones para ejecutar la aplicación
Para ejecutar la aplicación, siga los siguientes pasos:

Clonar el repositorio.
```
git clone https://github.com/NathanLazo/openai-api-demo.git
```
Instalar las dependencias.
```
npm install
```
Copiar el archivo .env.example a .env.
```
cp .env.example .env
```
Agregar las credenciales de OpenAI al archivo .env.
```
OPENAI_API_KEY=   # Agregar la API key de OpenAI
```
Ejecutar la aplicación con npm run dev.
```
npm run dev
```
Acceder a la aplicación en el navegador en http://localhost:3000.

## Contribuciones
[Nathan Lazo](https://github.com/NathanLazo)