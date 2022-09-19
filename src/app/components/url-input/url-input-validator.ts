import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (isValidUrl(control.value))
      return null;

    return { invalidUrl: {value: control.value}};
  };
}

export function isValidUrl(url: string): boolean {
  if (url == "") return false;
  const control: HTMLInputElement = document.createElement("input");
  control.type = "url";
  control.value = url;
  return control.checkValidity();
}
