import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type PromptConfig = {
  title: string;
  desc: string;
  example: string;
}

@Injectable({
  providedIn: 'root'
})
export class PromptsJsonServiceService {

  public promptsData: any;
  constructor(private http: HttpClient) {
  }

  getPromptData(): Array<PromptConfig> {
    return this.promptsData;
  }

  readData(): Promise<any>{
    return this.http.get<any>('assets/prompts.json').toPromise().then(details => this.promptsData = details);
  }
}
