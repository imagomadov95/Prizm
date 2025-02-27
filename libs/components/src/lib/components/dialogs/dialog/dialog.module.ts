import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDialogComponent } from './dialog.component';
import { PolymorphModule, PrizmFocusTrapModule } from '../../../directives';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PrizmButtonModule } from '../../button';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmThemeModule,
    PrizmOverlayModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmInputIconButtonModule,
    PrizmScrollbarModule,
  ],
  declarations: [PrizmDialogComponent],
  exports: [PrizmDialogComponent],
})
export class PrizmDialogModule {}
