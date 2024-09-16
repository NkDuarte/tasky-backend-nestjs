import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-user')
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/get-all-users')
  async findAll(@Res() res: Response) {
    const results = await this.usersService.findAll();
    return res.status(200).json({
      success: true,
      msg: 'Busqueda exitosa!',
      data: results
    })
  }

  @Get('/unique-user/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const results = await this.usersService.findOne(id)
    return res.status(200).json({
      success: true,
      msg: 'Busqueda exitosa!',
      data: results
    })
  }

  @Patch('/update-user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() res: Response) {
    const results = await this.usersService.update(id, updateUserDto);
    return res.status(200).json({
      success: true,
      msg: `Actualizacion exitosa para el usuario ${results.name}`,
      data: results
    })
  }

  @Delete('/delete-user/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const results = await this.usersService.remove(id);
    return res.status(200).json({
      success: true,
      msg: `Se elimino correctamente`,
      data: results
    })
  }
}
