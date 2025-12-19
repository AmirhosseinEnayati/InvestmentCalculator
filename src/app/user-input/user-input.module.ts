import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserInput } from './user-input';

@NgModule({
  declarations: [UserInput],
  imports: [FormsModule, CommonModule],
  exports: [UserInput],
})
export class UserInputModule {}
