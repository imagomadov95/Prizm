import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Injector,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';
import { ZyfraDropdownWithContentService } from './zyfra-dropdown-with-content.service';
import { ZyfraDropdownTemplateDirective } from '../dropdown/zyfra-dropdown-template.directive';
import { DropdownChangeEvent } from '../dropdown/zyfra-dropdown.component';

@Component({
  selector: 'zyfra-dropdown-with-content',
  templateUrl: './zyfra-dropdown-with-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZyfraDropdownWithContentService],
})
export class ZyfraDropdownWithContentComponent<T = unknown>
  extends WrappedFormComponent
  implements ControlValueAccessor, AfterContentInit
{
  @Input() options: T[];
  @Input() optionLabel = 'label';
  @Input() optionValue;
  @Input() optionDisabled = 'disabled';
  @Input() optionGroupLabel = 'label';
  @Input() optionGroupChildren = 'items';
  @Input() name: string;
  @Input() scrollHeight = '200px';
  @Input() style: string;
  @Input() panelStyle: string;
  @Input() styleClass: string;
  @Input() panelStyleClass: string;
  @Input() filter: boolean;
  @Input() filterValue: string;
  @Input() filterBy: string;
  @Input() filterMatchMode:
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'equals'
    | 'notEquals'
    | 'in'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte' = 'contains';
  @Input() filterPlaceholder: string;
  @Input() filterLocale: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() emptyMessage = 'No records found';
  @Input() emptyFilterMessage = 'No results found';
  @Input() ariaLabelledBy: string;
  @Input() editable: boolean;
  @Input() maxlength: number;
  @Input() appendTo: any;
  @Input() tabindex: number;
  @Input() placeholder: string;
  @Input() inputId: string;
  @Input() dataKey: string;
  @Input() autofocus: boolean;
  @Input() autofocusFilter: boolean;
  @Input() resetFilterOnHide: boolean;
  @Input() dropdownIcon = 'zyfra-icon chevrons-down';
  @Input() autoDisplayFirst = true;
  @Input() group: boolean;
  @Input() groupTemplateClass: string;
  @Input() showClear: boolean;
  @Input() baseZIndex = 0;
  @Input() autoZIndex = true;
  @Input() showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
  @Input() hideTransitionOptions = '.1s linear';
  @Input() ariaFilterLabel: string;
  @Input() tooltip: any;
  @Input() tooltipStyleClass: string;
  @Input() tooltipPosition = 'top';
  @Input() tooltipPositionStyle = 'absolute';
  @Input() itemSize = 30;
  @Input() label = '';
  @Input() virtualScroll: boolean;
  @Input() mini: boolean;

  @Output() onChange = new EventEmitter<DropdownChangeEvent<T>>();
  @Output() onClick = new EventEmitter<PointerEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onShow = new EventEmitter<AnimationEvent>();
  @Output() onHide = new EventEmitter<AnimationEvent>();

  @ViewChild('dropdown') dropdown: Dropdown;
  @ContentChildren(ZyfraDropdownTemplateDirective) templates: QueryList<ZyfraDropdownTemplateDirective>;

  itemTemplate: TemplateRef<unknown>;
  groupTemplate: TemplateRef<unknown>;
  selectedItemTemplate: TemplateRef<unknown>;
  headerTemplate: TemplateRef<unknown>;
  emptyTemplate: TemplateRef<unknown>;
  emptyfilterTemplate: TemplateRef<unknown>;
  footerTemplate: TemplateRef<unknown>;

  isOpen: boolean;

  constructor(
    injector: Injector,
    ngControl: NgControl,
    private dropdownService: ZyfraDropdownWithContentService
  ) {
    super(injector, ngControl);
  }

  ngAfterContentInit(): void {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'group':
          this.groupTemplate = item.template;
          break;
        case 'selectedItem':
          this.selectedItemTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'empty':
          this.emptyTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyfilterTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
      }
    });
  }

  public handleOnShow(e: AnimationEvent): void {
    this.isOpen = true;
    this.dropdownService.setDropdownPanelPosition();
    this.onShow.emit(e);
  }

  public handleOnHide(e: AnimationEvent): void {
    this.isOpen = false;
    this.onHide.emit(e);
  }
}