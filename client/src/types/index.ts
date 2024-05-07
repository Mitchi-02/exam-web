export type Medecin = {
  _id: string;
  nom: string;
  wilaya: string;
  commune: string;
};

export type MedecinPost = {
  nom: string;
  wilaya: string;
  commune: string;
};

export interface SuccessResponse<T> extends Record<string, any> {
  message: string;
  data: T;
}
