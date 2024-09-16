import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Redirect('https://documenter.getpostman.com/view/14362863/2sAXqp8iLP')
  getDocs() {
    // Redirige automáticamente a la URL de tu Postman
  }
}
