import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserProfile } from '../models/UserProfiles';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  item:any;
  ModeratorName: any;
  constructor(private afs: AngularFirestore , private menuCtrl: MenuController,
    private router: Router , private aroute: ActivatedRoute) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {
    this.aroute.params.pipe().subscribe(a=>{
        this.ModeratorName = a.id;
     });
      this.item = this.afs
      .collection<UserProfile>("UsersProfile", ref =>
        ref
          .where("Status", "==", "Pending")
          
      )
      .valueChanges();
      console.log(this.item);   
  }

  profileDetail(user)
  {
    this.router.navigate(['profiledetail/' + user.id + "/" + this.ModeratorName]);
  }


  openMenu()
  {
    this.menuCtrl.toggle();
  }
}
