import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserProfile } from '../models/UserProfiles';

@Component({
  selector: 'app-decline',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.scss'],
})
export class DeclineComponent implements OnInit {
  data:any;
  ModeratorName:any
  constructor(private menuCtrl: MenuController ,private router: Router ,private aroute:ActivatedRoute,
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.aroute.params.pipe().subscribe(a=>{
      this.ModeratorName = a.id;
   });
    this.data = this.afs
      .collection<UserProfile>("UsersProfile", ref =>
        ref
          .where("Status", "==", "Decline")
          
      )
      .valueChanges();
      
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
