import {Controller, Get, Post} from "@tsed/common";
import { Request, Response } from "@tsed/common";

@Controller("/user")
export class UserController {
  @Get('/me')
  currentUser(req: Request, res: Response): void {
    res.status(200).send({ 
      id: 'something'
    });
  }

  @Post('/login')
  loginUser(req: Request, res: Response): void {
    res.status(200).send({ 
      status: 'failed'
    });
  }
}