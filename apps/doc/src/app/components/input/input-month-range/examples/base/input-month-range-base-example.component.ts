import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-month-range-base-example',
  templateUrl: './input-month-range-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputMonthRangeBaseExampleComponent {
  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));
}
