import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
  standalone: false,
})
export class UserInput {
  private investmentService = inject(InvestmentService);

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(50);
  duration = signal(10);

  onSumbit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }
}
