import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from './../quote.service';

@Component({
  selector: 'app-page-info-container',
  templateUrl: './page-info-container.component.html',
  styleUrls: ['./page-info-container.component.scss']
})
export class PageInfoContainerComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  quotes: Quote[] = [];
  randomQuote?: Quote;

  getQuotes(): void {
    this.quoteService.getQuotes()
        .subscribe(quotes => this.randomQuote = quotes[Math.floor(Math.random() * quotes.length)]);
  }

}
