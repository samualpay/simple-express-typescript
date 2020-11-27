import { Request, Response } from "express";
import { Rout } from "type/Rout";
import BaseController from "./BaseController";

class HomeController extends BaseController {
    public path = '/';
    initRoutes(): Rout[] {
        return [
            {
                action: '/',
                method: 'get',
                runner: this.test
            }
        ]
    }
    private async test(req: Request, res: Response) {

        res.render('home/index', {
            users: [
                {
                    id: 1,
                    name: 'Ali'
                },
                {
                    id: 2,
                    name: 'Can'
                },
                {
                    id: 3,
                    name: 'Ahmet'
                }
            ]
        })
    }
}
export default HomeController