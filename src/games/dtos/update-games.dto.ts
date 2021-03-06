import { IsString} from 'class-validator';
import { User } from 'src/users/user.entity';

export class UpdateGameDto {
  @IsString()
  id?: string;

  @IsString()
  nome: string;

  @IsString()
  imagem: string;

  @IsString()
  bio: string;

  @IsString()
  data_lancamento: Date;

  user: User;
}
