import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

import { App } from './app';
import { Header } from './header/header';
import { InvestmentResult } from './investment-result/investment-result';

@NgModule({
  declarations: [App, Header, InvestmentResult],
  bootstrap: [App],
  imports: [BrowserModule, UserInputModule],
})
export class AppModule {}
