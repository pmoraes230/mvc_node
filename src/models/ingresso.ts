export interface Ingresso {
  ID_Ingresso: string;
  Cliente_ID: number;
  Evento_ID: number;
  Setor_ID: number;
  Data_Emissao_Ingresso: Date;
  Status_Ingresso: 'emitido' | 'validado' | 'cancelado';
}