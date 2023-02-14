import {language} from "../../shared/types/Language";

export interface ConflictProblemDetails {
  stacktrace?: string;
  errors: ErrorDescriptor[];
}

export interface ErrorDescriptor {
  code?: string;
  lang: language;
  description: string;
  Description?: string;
}
