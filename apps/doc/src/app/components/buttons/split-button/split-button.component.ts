import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PrizmAppearance, PrizmAppearanceType, PrizmContent, PrizmSize } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-split-button-example',
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .box {
      margin-bottom: 2rem;

      .title {
        margin-bottom: 0.5rem;
      }

      .content {

        display: flex;
        gap: 1rem;
      }
    }
  `]
})
export class SplitButtonComponent {
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  iconVariants: ReadonlyArray<PrizmContent> = ['chevrons-dropdown', ''];
  icon: PrizmContent = this.iconVariants[0];
  iconRight: PrizmContent = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PrizmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PrizmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PrizmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PrizmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  content = 'Button Name';
  showLoader = false;

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');


  readonly exampleSplit: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/split/split-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/split/split-buttons-example.component.html'),
  };
}