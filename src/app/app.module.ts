import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BucketFormComponent } from './bucket-form/bucket-form.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import { StoreService } from './store.service';
import { BucketInfoComponent } from './bucket-info/bucket-info.component';
import { BucketContentComponent } from './bucket-content/bucket-content.component';
import { ContentFilesComponent } from './content-files/content-files.component';
import { FilesizePipe } from './filesize.pipe';

const appRoutes: Routes = [
  { path: '', component: BucketlistComponent },
  { path: 'bucket/:id', component: BucketContentComponent },
  { path: '**', component: BucketlistComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, BucketFormComponent, BucketlistComponent, HeaderComponent, BucketComponent, BucketInfoComponent, BucketContentComponent, ContentFilesComponent, FilesizePipe ],
  bootstrap:    [ AppComponent ],
  providers: [StoreService]
})
export class AppModule { }
