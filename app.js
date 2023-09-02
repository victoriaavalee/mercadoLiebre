const express = require ('express');
const app = express ();
const PORT= process.env.PORT || 8080
const path= require ('path');
const publicFolderPath=path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen (PORT, () => {
    console.log (`[server] corriendo en el puerto: ${PORT}`);
});
//Rutas
app.get ('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get ('/creaTuCuenta', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/CreaTuCuenta.html'))
});

app.get ('/ingresa', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/ingresa.html'))
});
