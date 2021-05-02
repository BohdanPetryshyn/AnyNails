import { Exclude, Expose } from 'class-transformer';
import {
  IsEmail,
  IsLocale,
  IsNotEmpty,
  IsOptional,
  IsUrl,
} from 'class-validator';
import instantiateAndValidate from '../../common/validation/instantiateAndValidate';

@Exclude()
export class PersonalData {
  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsNotEmpty()
  firstName: string;

  @Expose()
  @IsOptional()
  gender?: string;

  @Expose()
  @IsLocale()
  locale: string;

  @Expose()
  @IsUrl()
  pictureUrl: string;

  constructor(
    email: string,
    firstName: string,
    gender: string,
    locale: string,
    pictureUrl: string,
  ) {
    this.email = email;
    this.firstName = firstName;
    this.gender = gender;
    this.locale = locale;
    this.pictureUrl = pictureUrl;
  }

  static fromPlain(checkRequest: PersonalData) {
    return instantiateAndValidate(PersonalData, checkRequest);
  }
}
