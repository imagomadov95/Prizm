import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-textarea-example',
  templateUrl: './textarea-example.component.html',
  styleUrls: ['./textarea-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaExampleComponent {
  public label = 'Заголовок';
  public placeholder = '';

  public outer: false;

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  height = null;
  testIdPostfix: string;
  width = '20rem';

  public required = false;
  public border = false;
  public status: PrizmInputStatus = 'default';
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];

  public readonly zyfraTextareaBasicExample: TuiDocExample = {
    TypeScript: import('./examples/textarea-basic-example/textarea-basic-example.component.ts?raw'),
    HTML: import('./examples/textarea-basic-example/textarea-basic-example.component.html?raw'),
  };

  public readonly zyfraTextareaAutosizeExample: TuiDocExample = {
    TypeScript: import('./examples/textarea-autosize-example/textarea-autosize-example.component.ts?raw'),
    HTML: import('./examples/textarea-autosize-example/textarea-autosize-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
