import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  public blog: any;
  private blogSubscribe: any;

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getBlog();
  }

  ngOnDestroy() {
    this.blogSubscribe.unsubscribe();
  }

  getBlog() {
    this.blogSubscribe = this.databaseService
      .getBlog()
      .subscribe((blog: any) => {
        this.blog = blog;
      });
  }
}
