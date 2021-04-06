const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res) => {
    res.send('Login')
})

app.get('/signUp', (req, res) => {
    res.send('Sign Up')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/create', (req, res) => {

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    
})
