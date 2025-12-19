import { Component, computed, inject } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
  standalone: false
})
export class InvestmentResult {
  private investmentService = inject(InvestmentService);

  result = computed(()=>this.investmentService.resultData());
}
