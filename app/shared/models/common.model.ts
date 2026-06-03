export interface IApiResponse<T> {
  result: {
    data?: T
    total?: number
    status?: boolean
    totalPage?: number
    totalItem?: number
    last?: boolean
  }
  message: string
  statusCode: number
  status?: string | number
  errorCode?: string
}
