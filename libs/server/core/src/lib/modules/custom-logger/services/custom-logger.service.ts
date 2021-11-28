import { Logger, LoggerService } from '@nestjs/common';

export class CustomLoggerService extends Logger implements LoggerService {
  /** Public getter for module context */
  public get moduleContext(): string {
    return this._moduleContext;
  }

  constructor(private readonly _moduleContext: string) {
    super();
  }

  //#region PUBLIC

  /**
   * @override Set error to logs.
   * @param {any} message for logger.
   * @param {string} trace (optional) error trace.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public error(
    message: any,
    trace?: string,
    ...optionalParams: [...any, string?]
  ): void {
    let context: string = optionalParams?.length ? optionalParams.pop() : '';
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.error(message, trace, ...[...optionalParams, context]);
  }

  /**
   * @override Set log to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public log(message: any, ...optionalParams: [...any, string?]): void {
    let context: string = optionalParams?.length ? optionalParams.pop() : '';
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.log(message, ...[...optionalParams, context]);
  }

  /**
   * @override Set warning to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public warn(message: any, ...optionalParams: [...any, string?]): void {
    let context: string = optionalParams?.length ? optionalParams.pop() : '';
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.warn(message, ...[...optionalParams, context]);
  }

  /**
   * @override Set debug to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public debug(message: any, ...optionalParams: [...any, string?]): void {
    let context: string = optionalParams?.length ? optionalParams.pop() : '';
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.debug(message, ...[...optionalParams, context]);
  }

  /**
   * @override Set verbose to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public verbose(message: any, ...optionalParams: [...any, string?]): void {
    let context: string = optionalParams?.length ? optionalParams.pop() : '';
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.verbose(message, ...[...optionalParams, context]);
  }

  //#endregion PUBLIC

  //#region PRIVATE

  /**
   * Set format to context using module context.
   * @param {string} context contains context and/or method name.
   * @returns {string} context formatted.
   */
  private _getContext(context: string): string {
    return context && typeof context === 'string'
      ? `${this.moduleContext}::${context}`
      : this.moduleContext;
  }

  //#endregion PRIVATE
}
