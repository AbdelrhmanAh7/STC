import { ErrorDescriptor } from '../models/conflict-problem-details';
import { language } from '../../shared/types/Language';

interface ErrorDescription {
  name: string;
  lang: string;
  code?: string;
  message: string;
}

export const globalErrorHandler = (
  res: any
): undefined | ErrorDescription | any => {
  if (res && res.status >= 200 && res.status < 300) {
    return undefined;
  }

  if (res.status === 401) {
    return undefined;
  }

  if (res?.error && res.status >= 400) {
    if (
      res.error.errors &&
      Array.isArray(res.error.errors) &&
      res.error.errors.length > 0
    ) {
      const descriptors: ErrorDescriptor[] = res.error.errors.filter(
        (x: any) => x.lang === getExceptionLanguage()
      );

      // TODO: return the array instead of just the first one and handle displaying it
      //  const descriptor = descriptors;
      return {
        error: descriptors,
        // ...descriptor,
      };
    }
    if (res.errors && Array.isArray(res.errors) && res.errors.length > 0) {
      const descriptors: ErrorDescriptor[] = (
        res.error.errors as ErrorDescriptor[]
      ).filter((x: ErrorDescriptor) => x.lang === getExceptionLanguage());

      // TODO: return the array instead of just the first one and handle displaying it
      //  const descriptor = descriptors;
      return {
        error: descriptors,
        // ...descriptor,
      };
    }

    // return;
  }
  if (res.Errors && Array.isArray(res.Errors) && res.Errors.length > 0) {
    const descriptors: ErrorDescriptor[] = res.Errors.filter(
      (x: ErrorDescriptor) => x.lang === getExceptionLanguage()
    );

    // TODO: return the array instead of just the first one and handle displaying it
    //  const descriptor = descriptors;
    return {
      error: descriptors,
      // ...descriptor,
    };
  }

  if (res.status === 404) {
    const error =
      getExceptionLanguage() === 'en'
        ? "The data you're trying to reach doesn't exist"
        : 'البيانات التي تحاول الوصول اليها غير موجودة';

    return [{ error: error }];
  }
  const defaultError: ErrorDescriptor[] = [
    {
      description: 'Technical error occurred',
      lang: 'en',
    },
    {
      description: 'حدث خطأ يرجي اعادة المحاولة او التواصل مع الدعم الفني',
      lang: 'ar',
    },
  ];

  return {
    error: defaultError.filter((x) => x.lang === getExceptionLanguage()),
  };
};

function getExceptionLanguage(): language {
  const preferredLang = localStorage.getItem('lang');

  if (!preferredLang) {
    return 'en';
  }

  const normalizedLang = preferredLang.toLowerCase();

  if (normalizedLang === 'ar' || normalizedLang.startsWith('ar-')) {
    return 'ar';
  }

  return 'en';
}
