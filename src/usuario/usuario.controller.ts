/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

   /*  @Get()
    async getAll() {
        return this.usuarioService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.usuarioService.getById(id)
    }

    @Post()
    async create(@Body() obj: UsuarioDto) {
        return this.usuarioService.create(obj)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() obj: UsuarioDto) {
        return this.usuarioService.update(id, obj)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usuarioService.delete(id)
    } */
}
