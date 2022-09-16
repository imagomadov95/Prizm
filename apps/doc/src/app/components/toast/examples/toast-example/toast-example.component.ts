import {Component, TemplateRef} from '@angular/core';
import {ZuiToastService, ZuiToastAppearance, ZuiToastPosition} from "@digital-plant/zui-components";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'zui-toast-example',
  templateUrl: './toast-example.component.html',
  styles: [`
    .box{
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    a {
      color: #337EFF;
      text-decoration: underline;
    }

    .footer {
      margin-top: 8px;
    }

    .date {
      color: #A1A5B7;
      margin: 8px 0;
    }

    .header-title {
      width: 400px;
      display: flex;
      justify-content: space-between;
      gap: 30px;

      .title {
        font-weight: inherit;
        font-size: inherit;
      }
    }
  `]
})
export class ZuiToastExampleComponent {

  readonly data = [
    {
      val: ZuiToastPosition.TOP_MIDDLE,
      label: 'Top Middle',
    },
    {
      val: ZuiToastPosition.TOP_LEFT,
      label: 'Top Left',
    },
    {
      val: ZuiToastPosition.TOP_RIGHT,
      label: 'Top Right',
    },
    {
      val: ZuiToastPosition.BOTTOM_MIDDLE,
      label: 'Bottom Middle',
    },
    {
      val: ZuiToastPosition.BOTTOM_LEFT,
      label: 'Bottom Left',
    },
    {
      val: ZuiToastPosition.BOTTOM_RIGHT,
      label: 'Bottom Right',
    },
  ];
  readonly formControl = new FormControl(ZuiToastPosition.TOP_RIGHT);
  constructor(private readonly toastService: ZuiToastService) {
  }

  public showSuccessToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(
      contentTemplate,
      {
        appearance: 'success',
        position: this.formControl.value,
        timer: 5000,
        isPlatform: true,
        title: 'Большой заголовок очень очень очень очень'
      }
    );
  }

  public showWarningToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(
      contentTemplate,
      {
        appearance: 'warning',
        position: this.formControl.value,
        timer: 5000,
        isPlatform: true,
        title: 'Большой заголовок очень очень очень очень'
      }
    );
  }

  public showDangerToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(
      contentTemplate,
      {
        appearance: 'danger',
        position: this.formControl.value,
        timer: 5000,
        isPlatform: true,
        title: 'Большой заголовок очень очень очень очень'
      }
    );
  }

  public showInfoToastWithContentTemplate(contentTemplate: TemplateRef<unknown>): void {
    this.toastService.create(
      contentTemplate,
      {
        appearance: 'info',
        position: this.formControl.value,
        timer: 5000,
        isPlatform: true,
        title: 'Большой заголовок очень очень очень очень'
      }
    );
  }
}