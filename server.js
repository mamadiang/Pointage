const app = require('./index');

/*app.listen(3000, () =>{
    // console.log('votre serveur est lancé sur http://127.0.0.1:3000')*/
const PORT = 3000;
    app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur accessible sur le réseau : http://172.20.10.8:${PORT}`);
});