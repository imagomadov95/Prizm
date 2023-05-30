import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmSelectStringify } from '@prizm-ui/components';

@Component({
  selector: 'prizm-select-base-example',
  templateUrl: './select-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSelectBaseExampleComponent {
  readonly items = [
    '',
    false,
    true,
    0,
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  readonly stringify: PrizmSelectStringify<string | number | boolean> = (item: string | number | boolean) => {
    switch (typeof item) {
      case 'string':
        return item || 'Пустая строка';
      case 'number':
        return item.toString();
      case 'boolean':
        return item ? 'TRUE' : 'FALSY';
    }

    return item;
  };

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
