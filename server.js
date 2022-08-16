import express from 'express'
import cors from 'cors'

const app = express()

import liderRoutes from './routes/lider.routes.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(liderRoutes)


app.listen(8080, () => {
  console.log('Serverxon is ready on 8080');
})