import { Component } from '@angular/core';



@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponet {
    // posts = [
    //     { title: 'First Post', content: "this is first post's contnet" },
    //     { title: 'Second Post', content: "this is second post's contnet" },
    //     { title: 'Third Post', content: "this is third post's contnet" },
    // ];
    posts = [];
}