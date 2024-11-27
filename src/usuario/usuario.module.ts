import { UsuarioController } from './usuario.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
