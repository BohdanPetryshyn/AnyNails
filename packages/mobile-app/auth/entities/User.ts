import { Exclude, Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import instantiateAndValidate from '../../common/validation/instantiateAndValidate';
import { PersonalData } from './PersonalData';

export enum Role {
  CLIENT = 'CLIENT',
  MASTER = 'MASTER',
}

@Exclude()
export class User {
  @Expose()
  @ValidateNested()
  @Type(() => PersonalData)
  personalData: PersonalData;

  @Expose()
  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  constructor(personalData: PersonalData, role?: Role) {
    this.personalData = personalData;
    this.role = role;
  }

  static fromPlain(plain: User) {
    return instantiateAndValidate(User, plain);
  }
}
