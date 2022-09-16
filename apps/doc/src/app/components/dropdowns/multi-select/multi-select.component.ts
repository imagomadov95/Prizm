import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiContextWithImplicit,
  zuiPure,
  ZuiScrollbarVisibility,
} from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-multi-select-example',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent {
  readonly control = new FormControl();
  searchable = false;
  outer = false;
  label = 'Выберите участника';
  emptyContent = 'Ничего не найдено';
  nullContent = 'Не выбрано';
  minDropdownHeight = 0;
  maxDropdownHeight = 342;
  placeholder = '';
  visibility: ZuiScrollbarVisibility = 'auto';
  readonly itemsVariants: ReadonlyArray<string[] | null> = [
    [
      'Андрей Сафанов',
      'Сергей Марков',
      'Аня Петрова',
      'Катя Петрова',
      'Саша Дуров',
      'Влад Константинов',
      'Костя Щербаков',
      'Рустам Гусев',
      'Филип Уваров',
    ],
    null
  ];
  readonly valVariants: ReadonlyArray<string | null> =  [
    ...this.itemsVariants[0],
    null
  ];
  readonly valueControl = new FormControl([]);
  public items = [
    'One',
    'Two',
    'Three',
  ]


  set disabled(state: boolean) {
    if (state)
      this.control.disable();
    else
      this.control.enable()
  }
  get disabled(): boolean {
    return this.control.disabled;
  }

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/multi-select-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/multi-select-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/multi-select-with-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-template/multi-select-with-template-example.component.html'),
  };

  readonly exampleWithObject: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-object/multi-select-with-object-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-object/multi-select-with-object-example.component.html'),
  };

  readonly exampleWithSearch: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-search/multi-select-with-search-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-search/multi-select-with-search-example.component.html'),
  };


  public valueTemplate: PolymorphContent<ZuiContextWithImplicit<any>> = ''
  @zuiPure
  public getValueTemplate (...temps: PolymorphContent[]): PolymorphContent<any>[] {
    return [
      null,
      ...temps
    ]
  }

  public get val(): string {
    return this.control.value;
  }

  public searchMatcher = (searchValue: string, item: unknown): boolean => {
    return item?.toString().toLowerCase().includes(searchValue.toLowerCase());
  }

  public identityMatcher = (a: unknown, b: unknown): boolean => {
    return a === b;
  };

  public stringify = (i: unknown): string => {
    return i?.toString?.() ?? '';
  };

  public setValue(val: string): void {
    this.control.setValue(val)
  }

}