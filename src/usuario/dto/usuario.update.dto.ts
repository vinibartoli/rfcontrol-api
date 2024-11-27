import { UsuarioDto } from "./usuario.dto";
import { PartialType } from '@nestjs/mapped-types'

export class UsuarioUpdateDto extends PartialType(UsuarioDto) {}