import { Component, OnInit } from '@angular/core';
import { HeroMessageService} from '../hero-message.service';

@Component({
  selector: 'app-hero-message',
  templateUrl: './hero-message.component.html',
  styleUrls: ['./hero-message.component.css']
})
export class HeroMessageComponent implements OnInit {

  constructor(public heromessageService : HeroMessageService) { }

  ngOnInit(): void {
  }

}
