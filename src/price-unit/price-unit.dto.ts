import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class PriceUnitDTO {
  @IsUUID()
  id: string;

  @IsString()
  name: string;
}
