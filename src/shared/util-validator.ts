export class UtilValidator {

  public static isNullUndefined(value: any): boolean {
    let result: boolean = false;
    if (value === null || value === undefined) {
      result = true;
    }
    return result;
  }

  public static isNullUndefinedEmpty(value: any, trimText: boolean = false): boolean {
    let result: boolean = false;

    if (trimText && typeof value === 'string') {
      value = value.trim();
    }

    if (UtilValidator.isNullUndefined(value) || value === '') {
      result = true;
    }

    return result;
  }

  public static isArray(value: any): boolean {
    let result: boolean = false;
    if (!UtilValidator.isNullUndefined(value) && (Array.isArray(value))) {
      result = true;
    }
    return result;
  }

  public static isArrayWithItems(value: any): boolean {
    let result: boolean = false;
    if (UtilValidator.isArray(value) && value.length > 0) {
      result = true;
    }
    return result;
  }

  static isEnumEqual(obj1: number | string, obj2: number | string): boolean {
    let ret = false;

    if (typeof obj1 === 'number') {
      ret = obj1.valueOf() === obj2.valueOf();
    } else {
      ret = obj1.toString() === obj2.toString();
    }

    return ret;
  }

  static isEnumGreaterEqual(obj1: number, obj2: number): boolean {
    let ret = false;

    ret = obj1.valueOf() >= obj2.valueOf();

    return ret;
  }

  static isEqual(str1: string, str2: string, ignoreCase: boolean = false): boolean {
    let ret = false;
    if (ignoreCase) {
      ret =
        (str1 === undefined && str2 === undefined) ||
        (str1 === null && str2 === null) ||
        (str1 != null && str2 != null && typeof str1 === 'string' && typeof str2 === 'string' && str1.toUpperCase() === str2.toUpperCase());
    } else {
      ret =
        (str1 === undefined && str2 === undefined) ||
        (str1 === null && str2 === null) ||
        (str1 != null && str2 != null && typeof str1 === 'string' && typeof str2 === 'string' && str1 === str2);
    }
    return ret;
  }

  static isEquals(value: string, ...equals: string[]): boolean {
    let ret = false;

    for (let i: number = 0; i < equals.length; i++) {
      if (this.isEqual(value, equals[i], false)) {
        ret = true;
        break;
      }
    }

    return ret;
  }

  static isEqualsIgnoreCase(value: string, ...equals: string[]): boolean {
    let ret = false;

    for (let i: number = 0; i < equals.length; i++) {
      if (this.isEqual(value, equals[i], true)) {
        ret = true;
        break;
      }
    }

    return ret;
  }

}