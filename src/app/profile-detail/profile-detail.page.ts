import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  data:any;
  ModeratorName: any;
  constructor(private aroute: ActivatedRoute , private toast: ToastController,
    private afs: AngularFirestore , private photoViewer: PhotoViewer) { }

  ngOnInit() {
     this.aroute.params.pipe().forEach(a=>{
      this.ModeratorName = a.name;
      this.data = this.afs.doc('UsersProfile/' + a.id).valueChanges()
     })
  }

  showPhoto(url)
  {
    this.photoViewer.show(url);
  }

  approved(id)
  {
    
    this.afs.doc('UsersProfile/' + id).update({'Status' : 'Approved'}).then(async a=>{
      this.afs.doc('UsersProfile/' + id).update({Moderator: this.ModeratorName})
      const toast  = await this.toast.create({
        message: 'User Approved Successfully.',
        position: 'bottom',
        duration: 2500
      })

      toast.present();
    });
  }

  async disapproved(id)
  {
    this.afs.doc('UsersProfile/' + id).update({'Status' : 'Disapproved'}).then(async a=>{
      const toast  = await this.toast.create({
        message: 'User Disapproved Successfully.',
        position: 'bottom',
        duration: 2500
      })

      toast.present();
    });;
  }
}

