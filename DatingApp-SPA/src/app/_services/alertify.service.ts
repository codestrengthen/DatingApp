import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
// this class will act like a wrapper around AltertifyJS functionalities
export class AlertifyService {

  onstructor() { }

  confirm(message: string, okCallback: () => any) {
    // e is the click event
    alertify.confirm(message, function(e) {
      if (e) {
        okCallback();
      } else {

      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
