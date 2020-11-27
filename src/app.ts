import BaseController from './controller/BaseController'
import express, { RequestHandler } from 'express'
import { Application } from 'express'
import errorMiddleware from './middleware/errorMiddleware'

class App {
    public app: Application
    public port: number

    constructor({ port, middleWares, controllers }: { port: number; middleWares: RequestHandler[]; controllers: BaseController[] }) {
        this.app = express()
        this.port = port
        this.middleWares(middleWares)
        this.routes(controllers)
        this.errorHandle()
        this.assets()
        this.template()
    }
    private middleWares(middleWares: RequestHandler[]) {
        this.app.use(middleWares)
    }
    private routes(controllers: BaseController[]) {
        controllers.forEach(({ path, router }) => {
            this.app.use(path, router)
        })
    }
    private errorHandle() {
        this.app.use(errorMiddleware)
    }
    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    private template() {
        this.app.set('view engine', 'pug')

    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}
export default App