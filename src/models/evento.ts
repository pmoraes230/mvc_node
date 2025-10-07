export interface Evento {
  ID_Evento?: number;
  Nome_Evento: string;
  LimitePessoas_Evento: number;
  Data_Evento: Date;
  Horario_Evento: string;
  Descricao_Evento: string;
  Imagem_Evento?: string;
  Usuario_ID_Usuario: number;
}