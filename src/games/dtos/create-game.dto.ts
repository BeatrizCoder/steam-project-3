import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty({ message: 'Please, inform the email address' })
  @IsEmail({}, { message: 'Please, inform a valid email address' })
  @MaxLength(200, {
    message: 'The email address must have less than 200 characters',
  })
  email: string;

  @IsNotEmpty({ message: 'Please, inform the user aame' })
  @MaxLength(200, {
    message: 'The email address must have less than 200 characters',
  })
  name: string;

  @IsNotEmpty({ message: 'Please inform the passaword' })
  @MinLength(6, { message: 'The email address must have less than 200 characters' }),
  password: string;

  @IsNotEmpty({ message: 'Please type th passaword to confirm' })
  @MinLength(6, {
    message: 'Please, the passawod confirmation  must have less than 200 characters',
  })
  passwordConfirmation: string;
}
