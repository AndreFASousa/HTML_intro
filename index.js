const express = require('express')
const path = require('path')
const app = express()
 
app.use(express.static('./public'))

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/Sign-in.html'))
})

app.get('/:nome', (req, res) => {
    (res.send('Ehehehehe ' + req.params.nome)
 )})

const port = 3000
 
app.listen(port, () =>  {
    console.log(`listening on port ${port}`)
}
)