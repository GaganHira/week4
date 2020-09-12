import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from "../users";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';
  password = '';
  valid = false;
  paramsub;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.paramsub = this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      this.password = params.get('password');
      
    });
  }

  itemClicked() {

    let users = [{ 'name': 'abc@com.au', 'password': '123' }, { 'name': 'abd@com.au', 'password': '123' }, { 'name': 'abe@com.au', 'password': '123' }];
    
    this.valid = false;
    for (let i = 0; i < users.length; i++) {
      if (this.name == users[i].name && this.password == users[i].password) {
        this.valid =true;
        this.router.navigate(['/accont/',this.valid]);
      } else {
        this.valid = false;
        alert("Wrong password")
      }
    }
  }
}

