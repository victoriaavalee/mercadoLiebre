const express = require ('express');
const app = express ();
const PORT= process.env.PORT || 8080;
const path= require ('path');
const publicFolderPath=path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.listen (8080, () =>{
    console.log ('MercadoLiebre corriendo en el puerto 8080');
});

app.get ('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});


app.get ('/creaTuCuenta', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/creaTuCuenta.html'))
});

app.get ('/ingresa', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/ingresa.html'))
});
