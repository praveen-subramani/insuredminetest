import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 gal= false
user: any
usersDB=[ 
    {
     "userid": "abc@media.com",
      "password":"abc123",
      "username":"tom"
    }, 
    {
      "userid": "def@media.com",
      "password":"def123",
      "username":"dick"
    }

  ]


  // constructor() { }
}
