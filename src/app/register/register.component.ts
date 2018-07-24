import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/user';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService]
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  receivedUser: User; 
    done: boolean = false;
  
  constructor(private apiService: ApiService) { }

  sendData(e) {
    e.preventDefault();

    this.apiService.register(this.user).subscribe(
      (response: any) => {
        console.warn('SAVE JWT TOKEN', response.data)
      },
       error => console.log(error)
    );
  } 

  ngOnInit() {
  }

  
}
