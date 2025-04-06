export default class ApiError extends Error {
  private _statusCode: number;
  private _isOperational: boolean;

  constructor(
    statusCode: number,
    message: string,
    isOperational: boolean = true,
    stack: string = ""
  ) {
    super(message);
    this._statusCode = statusCode;
    this._isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  public get statusCode(): number {
    return this._statusCode;
  }

  public get isOperational(): boolean {
    return this._isOperational;
  }
}
