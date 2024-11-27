import { DatabaseModule } from 'src/database.module';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService]
})
export class ClienteModule {}
