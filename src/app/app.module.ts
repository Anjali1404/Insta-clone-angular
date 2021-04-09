import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoriesComponent } from './stories/stories.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostComponent } from './posts/post/post.component';
import { MessagesComponent } from './message-inbox/messages/messages.component';
import { HomeComponent } from './home/home.component';
import { MessageInboxComponent } from './message-inbox/message-inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoriesComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent,
    MessagesComponent,
    HomeComponent,
    MessageInboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
