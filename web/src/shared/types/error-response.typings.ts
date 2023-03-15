export interface IError {
  message?: string;
  code?: number;
}

export interface IResponseError {
  status: number;
  data: IError;
}
