import App from './app'

import bodyParser from 'body-parser'
import TestController from './controller/HomeController'
const port = process.env.PORT || '5000'
const app = new App({
    port: parseInt(port),
    controllers: [new TestController()],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})
app.listen()