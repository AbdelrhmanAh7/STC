export interface ConflictProblemDetails {
  stacktrace?: string;
  errors: ErrorDescriptor[];
}

export interface ErrorDescriptor {
  code?: string;
  lang: string;
  description: string;
  Description?: string;
}
