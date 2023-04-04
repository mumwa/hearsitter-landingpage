import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { VideoComponent } from "./video/video.component";
import { ExplainComponent } from "./explain/explain.component";
import { TechComponent } from "./tech/tech.component";
import { ServiceComponent } from "./service/service.component";
import { MembersComponent } from "./members/members.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    ExplainComponent,
    TechComponent,
    ServiceComponent,
    MembersComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
