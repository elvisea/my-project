import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

/**
 * DTO para criação de usuário.
 */
export class CreateOwnerRequestDTO {
  /**
   * Nome do usuário.
   */
  @IsString()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @MaxLength(100, { message: 'Nome não pode ter mais de 100 caracteres' })
  name: string;

  /**
   * Email do usuário.
   */
  @IsEmail({}, { message: 'Email deve ser válido' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @MaxLength(100, { message: 'Email não pode ter mais de 100 caracteres' })
  email: string;

  /**
   * Senha do usuário.
   */
  @IsString()
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @MinLength(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
  @MaxLength(255, { message: 'Senha não pode ter mais de 255 caracteres' })
  password: string;
}
