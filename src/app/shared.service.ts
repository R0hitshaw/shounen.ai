
import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn:'root'
  }
)
export class SharedService {
  private sharedEmail: string = "";

  setSharedEmail(email: string) {
    this.sharedEmail = email;
  }

  getSharedEmail(): string {
    return this.sharedEmail;
  }
}
