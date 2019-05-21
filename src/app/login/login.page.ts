import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password:any;
  MName:any;
  constructor(private router: Router, private menuCtrl: MenuController 
    , private toast: ToastController) { 
    
  }

  ngOnInit() {
    console.log(this.menuCtrl.isEnabled('content1'));
    console.log(this.menuCtrl.enable(false , 'content1'));
  }

  
  async login()
  {
    if(this.username == null || this.password == null)
    {
      const toast = await this.toast.create({
        message: 'Username Or Password Cannot Be Empty.',
        duration: 2000
      });
      toast.present();
    }
   else if(this.username == "admin" && this.password == "admin@4321")
    {
      const toast = await this.toast.create({
        message: 'LoggedIn Success.',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['home/' + this.MName]);      
    }else{
      const toast = await this.toast.create({
        message: 'Invalid Email Or Password.',
        duration: 2000
      });
      toast.present();
    }
  }

}
