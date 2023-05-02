import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  constructor(private db: AngularFirestore) {}


  getBlog(): Observable<any[]> {
    return this.db.collection('news').valueChanges({ idField: 'id' });
  }
}
