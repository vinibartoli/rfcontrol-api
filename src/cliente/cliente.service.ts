/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteDto } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(@InjectModel('Usuario') private readonly clienteModel: Model<ClienteDto>) {}
}
