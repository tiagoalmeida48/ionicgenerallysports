export interface Usuario {
  idLogin?: number,
  pessoa: Pessoa,
  login: string,
  senha: string,
  email: string,
  caminhoFoto?: string,
  inativo?: boolean,

}
export interface Pessoa {
  idPessoa?: number,
  endereco: Endereco,
  nome: string,
  cpf: string,
  dtNascimento: Date,
  sexo: string,
  celular: string,
  telefone: string
}

export interface Endereco {
  id?: number,
  cep: string ,
  logradouro: string ,
  numero: number ,
  bairro: string ,
  cidade: string ,
  uf: string,
  complemento?: string,
}

export interface FormCadastro {
  usuario: Usuario
  confirmaSenha: string,
  listaPerfil: Perfil[]
}

export interface Perfil {
  authority: string,
  descricao: string
}

export interface UserAuthLogin {
  username: string;
  password: string;
  jwtToken?: string;
}
