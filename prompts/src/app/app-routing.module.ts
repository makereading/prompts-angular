import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptAreaComponent } from 'src/app/prompt-area/prompt-area.component';

const routes: Routes = [
  { path: '', component: PromptAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
