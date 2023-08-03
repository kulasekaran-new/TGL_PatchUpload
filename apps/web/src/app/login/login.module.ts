import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent,],
  imports: [CommonModule, FormsModule, AppMaterialModule, FlexLayoutModule,
    MatInputModule, MatButtonModule ],
})
export class LoginpageModule {}
