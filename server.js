const express = require('express');

const app = express();

app.use('/', express.static(__dirname));

app.get('/usluge', (req, res) => {
    res.sendFile(__dirname + '/usluge.html')
})

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })
app.listen(443, () => {
    console.log('Server is running on port 3000');
})