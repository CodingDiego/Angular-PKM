import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue: string|number = 0;
  firstOperand: number|null = null;
  operator: string|null = null;

  appendNumber(value: number) {
    this.displayValue = this.displayValue.toString() + value.toString();
  }

  setOperation(operator: string) {
    this.firstOperand = Number(this.displayValue);
    this.operator = operator;
    this.displayValue = '';
  }

  calculate() {
    if (this.firstOperand !== null && this.operator !== null) {
      const secondOperand = Number(this.displayValue);
      switch (this.operator) {
        case '+':
          this.displayValue = (this.firstOperand + secondOperand).toString();
          break;
        case '-':
          this.displayValue = (this.firstOperand - secondOperand).toString();
          break;
        case '*':
          this.displayValue = (this.firstOperand * secondOperand).toString();
          break;
        case '/':
          if (secondOperand != 0) {
            this.displayValue = (this.firstOperand / secondOperand).toString();
          } else {
            this.displayValue = "Error";
          }
          break;
        default:
          this.displayValue = "Error";
      }
      this.firstOperand = null;
      this.operator = null;
    }
  }
  clear() {
    this.displayValue = '';
    this.firstOperand = null;
    this.operator = null;
  }
}