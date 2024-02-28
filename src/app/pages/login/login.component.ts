import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  route: any;

  constructor(private router:Router) { }

  ngOnInit():void {
    google.accounts.id.initialize({
      client_id :'338240023591-g0top08mo9dusg58cb6labd90m304b5i.apps.googleusercontent.com',
      callback:(res:any)=>this.handlelogin(res)
      }
    )
    google.accounts.id.renderButton(document.getElementById("google_btn"),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      width:250,
    })

  }
  private decodetoken(token:any){
    return JSON.parse(atob(token.split(".")[1]));
    //atob() decode data and encodeing base 64
  }
  handlelogin(response:any){
    //decode token
    if(response){
      const payload = this.decodetoken(response.credential);
    //store in session storage
   sessionStorage.setItem("loggedUserDetails",JSON.stringify(payload));
    //navigate to home/browser
      this.router.navigate(['browser']).then(()=>{
        location.reload();
      })
    }
  }
}
