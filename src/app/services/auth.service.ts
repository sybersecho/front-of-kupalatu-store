import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private loggedId = false;

  constructor() { }

  public isAuthenticated() {
	const promise = new Promise(
  			(resolve, reject) => {
  				setTimeout(() => {
  					resolve(true);
  				}, 800);
  			}
  		);
  	return promise;
  }

  public login(): void {
  	this.loggedId = true;
  }

  public logout(): void {
  	this.loggedId = false;
  }
}
