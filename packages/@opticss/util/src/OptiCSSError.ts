export interface ErrorLocation {
  filename?: string;
  line?: number;
  column?: number;
}

/**
 * Custom Opticss error base class. Will format `ErrorLocation` into thrown
 * error message if provided.
 */
export class OptiCSSError extends Error {
  static prefix = "Error";
  origMessage: string;
  private _location?: ErrorLocation;
  constructor(message: string, location?: ErrorLocation) {
    super(message);
    this.origMessage = message;
    this._location = location;
    super.message = this.annotatedMessage();
  }

  private annotatedMessage() {
    let loc = this.location;
    if (!loc) {
      return this.origMessage;
    }
    let filename = loc.filename || "";
    let line = loc.line ? `:${loc.line}` : "";
    let column = loc.column ? `:${loc.column}` : "";
    let locMessage = ` (${filename}${line}${column})`;
    let prefix = (<Partial<{prefix: string}>>this.constructor).prefix;
    return `OptiCSS ${prefix || OptiCSSError.prefix}: ${this.origMessage}${locMessage}`;
  }

  get location(): ErrorLocation | undefined {
    return this._location;
  }
}
