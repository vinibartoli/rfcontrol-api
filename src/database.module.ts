/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/rfcrontol'),
        /* MongooseModule.forFeature([{ name: "Usuario", schema: UsuarioSchema }]) */
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
