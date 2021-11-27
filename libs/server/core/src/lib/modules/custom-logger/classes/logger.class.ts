import { LoggerService } from '@nestjs/common';

export class LoggerClass {
  /** Facade for logger used to set class context automatically */
  protected readonly logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = new LoggerFacadeService(logger, this.constructor.name);
  }
}

class LoggerFacadeService implements LoggerService {
  constructor(
    private readonly logger: LoggerService,
    private readonly classContext: string
  ) {}

  //#region PUBLIC

  /**
   * Set error to logs.
   * @param {any} message for logger.
   * @param {string} trace (optional) error trace.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public error(message: any, trace?: string, context?: string): void {
    context = this._getContext(context);
    this.logger.error(message, trace, context);
  }

  /**
   * Set log to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public log(message: any, context?: string): void {
    context = this._getContext(context);
    this.logger.log(message, context);
  }

  /**
   * Set warning to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public warn(message: any, context?: string): void {
    context = this._getContext(context);
    this.logger.warn(message, context);
  }

  /**
   * Set debug to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public debug(message: any, context?: string): void {
    context = this._getContext(context);
    this.logger.debug(message, context);
  }

  /**
   * Set verbose to logs.
   * @param {any} message for logger.
   * @param {string} context (optional) it's used to set context class and/or method name.
   */
  public verbose(message: any, context?: string): void {
    context = this._getContext(context);
    this.logger.verbose(message, context);
  }

  //#endregion PUBLIC

  //#region PRIVATE

  /**
   * Set format to context using context.
   * @param {string} context contains context and/or method name.
   * @returns {string} context formatted.
   */
  private _getContext(context: string): string {
    return context ? `${this.classContext}.${context}` : this.classContext;
  }

  //#endregion PRIVATE
}
