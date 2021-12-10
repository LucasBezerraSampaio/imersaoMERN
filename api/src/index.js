const express = require('express');
const servidor = express();



servidor.get('/', async (req, resp) => {
    resp.send(
        {
            status: 'Has been started'
        }
    )
})



const port = process.env.PORT;
servidor.listen(
    port,
    () => console.log(`API has been started in port ${port}`)
)