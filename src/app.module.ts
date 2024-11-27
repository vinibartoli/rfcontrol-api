import { ClienteModule } from './cliente/cliente.module';
import { DatabaseModule } from './database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ClienteModule, UsuarioModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
