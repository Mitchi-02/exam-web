export type Item = {
  _id: string;
  name: string;
  description: string;
};

export type ItemPost = {
  name: string;
  description: string;
};

export interface SuccessResponse<T> extends Record<string, any> {
  message: string;
  data: T;
}
