import { PartialType } from "@nestjs/mapped-types";
import { ClienteDto } from "./cliente.dto";

export class ClienteUpdateDto extends PartialType(ClienteDto) {}