import { Component } from '@angular/core';
import { PromptsJsonServiceService } from 'src/prompts-json-service.service';

@Component({
  selector: 'app-prompt-area',
  templateUrl: './prompt-area.component.html',
  styleUrls: ['./prompt-area.component.scss']
})
export class PromptAreaComponent {

  public prompts: any;
  constructor(public promptService: PromptsJsonServiceService){
    this.prompts = this.promptService.getPromptData();
  }

  ngOnInit(){
    console.log(this.prompts);
  }

}
