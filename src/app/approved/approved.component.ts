import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserProfile } from '../models/UserProfiles';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss'],
})
export class ApprovedComponent implements OnInit {
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
          .where("Status", "==", "Approved")
          
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
