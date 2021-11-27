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
  public error(message: any, trace?: string, context?: string): void {
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.error(message, trace, context);
  }

  /**
   * @override Set log to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public log(message: any, context?: string): void {
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.log(message, context);
  }

  /**
   * @override Set warning to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public warn(message: any, context?: string): void {
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.warn(message, context);
  }

  /**
   * @override Set debug to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public debug(message: any, context?: string): void {
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.debug(message, context);
  }

  /**
   * @override Set verbose to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public verbose(message: any, context?: string): void {
    context = this._getContext(context);
    // TODO: Adds winston implementation here!
    super.verbose(message, context);
  }

  //#endregion PUBLIC

  //#region PRIVATE

  /**
   * Set format to context using module context.
   * @param {string} context contains context and/or method name.
   * @returns {string} context formatted.
   */
  private _getContext(context: string): string {
    return context ? `${this.moduleContext}::${context}` : this.moduleContext;
  }

  //#endregion PRIVATE
}
