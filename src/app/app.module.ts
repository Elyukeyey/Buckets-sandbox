import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BucketFormComponent } from './bucket-form/bucket-form.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { HeaderComponent } from './header/header.component';
import { BucketComponent } from './bucket/bucket.component';
import { StoreService } from './store.service';
import { BucketInfoComponent } from './bucket-info/bucket-info.component';
import { BucketContentComponent } from './bucket-content/bucket-content.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BucketFormComponent, BucketlistComponent, HeaderComponent, BucketComponent, BucketInfoComponent, BucketContentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StoreService]
})
export class AppModule { }
