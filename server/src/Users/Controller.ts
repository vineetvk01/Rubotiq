import {Controller, Get} from "@tsed/common";

@Controller("/users")
export class UserController {
  @Get()
  findAll(): string {
    return "This action returns all calendars";
  }
}