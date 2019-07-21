import { 
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import { Post } from '../post.model';
import { PostsService} from '../posts.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponet implements OnInit, OnDestroy {
    // posts = [
    //     { title: 'First Post', content: "this is first post's contnet" },
    //     { title: 'Second Post', content: "this is second post's contnet" },
    //     { title: 'Third Post', content: "this is third post's contnet" },
    // ];
    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}
    
    ngOnInit() {
      this.posts = this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}