import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Observable } from 'rxjs';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'post-blog';

  public _post: Post[];

  constructor(private _postService: PostService) {

  }

  ngOnInit() {

    this.listarPost();

  }

  listarPost() {

    this._postService.getPost().subscribe(data => {
      console.log(data);
    });
  }

}
