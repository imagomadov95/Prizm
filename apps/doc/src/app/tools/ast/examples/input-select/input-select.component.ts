import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { PrizmInputSelectTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-input-select-example',
  templateUrl: './input-select.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstnputSelectExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = PrizmInputSelectTemplateTasks;

  readonly html = `<prizm-stepper
  [currentStep]="currentStep"
  [title]="'Stepper vertical example'"
  [vertical]="true"
  [stepsSize]="'150px'"
  (selectStep)="this.currentStep = $event"
>
  <ng-template
    [prizmStepperStep]="1"
    [title]="steps[1].title"
    [status]="steps[1].status"
    [disabled]="steps[1].disabled"
  >
    <div>
      <prizm-select
        [(ngModel)]="steps[1].status"
        [items]="statusItems"
        [label]="'Состояние'"
        [forceClear]="false"
      >
      </prizm-select>

      <div class="next-step-disabled-container">
        <prizm-checkbox [(ngModel)]="steps[2].disabled">Шаг 2 disabled</prizm-checkbox>
      </div>
    </div>
    <br />
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi deserunt ratione eius consequatur earum
      laborum quod, reprehenderit nam totam excepturi magnam ex quae assumenda autem, amet nostrum repellendus
      itaque, praesentium nisi reiciendis! Nostrum praesentium provident dolorem blanditiis vitae mollitia
      nobis dicta? At recusandae autem ab ut repellendus repudiandae possimus, corporis quaerat ullam dolores
      libero quas in dicta laudantium quos, explicabo maxime nostrum architecto fuga, neque provident vitae?
      Odit, necessitatibus. Veritatis voluptatem aperiam perspiciatis nesciunt ab reiciendis, voluptatum atque
      nobis dolor ullam optio soluta dignissimos pariatur rem est totam quam officia. Dolorum nihil harum quo
      nulla. Blanditiis dicta earum, vero illo voluptatibus animi commodi voluptate rem ullam, pariatur
      consectetur quo deleniti tempora labore magnam obcaecati molestias harum dolore molestiae unde itaque!
      Laborum odit maxime rerum aspernatur reprehenderit expedita laudantium itaque nesciunt eum iste
      perspiciatis hic ipsum architecto magnam dignissimos odio, quas ipsam eaque suscipit modi voluptatibus
      officiis possimus. Reiciendis unde tenetur maiores veritatis voluptates molestias ad nihil provident
      quod id illo facilis
    </div>
  </ng-template>
  <ng-template
    [prizmStepperStep]="2"
    [title]="steps[2].title"
    [status]="steps[2].status"
    [disabled]="steps[2].disabled"
  >
    <div>
      <prizm-select
        [(ngModel)]="steps[2].status"
        [items]="statusItems"
        [label]="'Состояние'"
        [forceClear]="false"
      >
      </prizm-select>
      <div class="next-step-disabled-container">
        <prizm-checkbox [(ngModel)]="steps[3].disabled">Шаг 3 disabled</prizm-checkbox>
      </div>
    </div>
    <br />
    <div>
      laborum aut, quasi eligendi nihil quo laboriosam beatae repellat perferendis velit, vel accusamus
      delectus. Odio, repellendus dignissimos unde consequuntur commodi facere laborum, ipsa, optio incidunt
      sunt doloribus? Architecto, voluptatum, adipisci, autem dolore nam eveniet minima veniam tenetur nemo
      iusto vel tempore exercitationem amet. Rem in, suscipit eveniet recusandae asperiores nesciunt
      consectetur ipsam minima. Iure tempora dolores distinctio inventore quas, dicta vitae expedita sapiente
      provident perferendis sunt aliquam voluptates voluptatibus est. Obcaecati illo iure minus nam facere
      voluptas est consequatur deleniti amet magni fugiat, sit quas asperiores, voluptate, mollitia inventore
      commodi libero et doloremque quisquam quam. Expedita, architecto! Nesciunt neque voluptate iusto dicta
      id error cupiditate ab, corrupti fugit inventore non assumenda voluptatum deleniti autem quidem quia
      suscipit ipsum maxime incidunt eum fugiat, placeat est animi. Laboriosam cumque dolor quis esse, enim
      inventore soluta. Nisi natus tempora quis odio atque non explicabo ad, provident voluptas quas esse sed
      dolore aliquam nulla autem libero similique magnam et quia iusto minima voluptates consequatur ullam.
      Incidunt aliquid voluptate itaque ipsam! Iusto nobis alias cum inventore sequi maiores. Facilis quae
      asperiores, accusamus tempore dolorum laboriosam quis dolor ex voluptas. Tempora doloremque nulla,
      eveniet, ipsam beatae tempore cumque omnis dolorem odio harum quisquam pariatur, rem laborum molestias
      consequatur? Facilis eaque sed et ad nihil tempore rerum vel ipsa accusantium aliquam aliquid tempora
      atque obcaecati cumque nulla quos voluptate, dolores cupiditate!
    </div>
  </ng-template>
  <ng-template
    [prizmStepperStep]="3"
    [title]="steps[3].title"
    [status]="steps[3].status"
    [disabled]="steps[3].disabled"
  >
    <div>
      <prizm-select
        [(ngModel)]="steps[3].status"
        [items]="statusItems"
        [label]="'Состояние'"
        [forceClear]="false"
      >
      </prizm-select>

      <div class="next-step-disabled-container">
        <prizm-checkbox [(ngModel)]="steps[4].disabled">Шаг 4 disabled</prizm-checkbox>
      </div>
    </div>
    <br />
    <div>
      laudantium, officiis officia eos suscipit reprehenderit vel repellendus ducimus voluptatum voluptatibus
      quas provident minima. Delectus accusantium explicabo dicta voluptatum repudiandae officia nesciunt
      molestias sapiente perferendis culpa quis quisquam nam commodi ipsum possimus consequuntur labore amet
      libero ducimus, earum molestiae illo porro atque natus. Quibusdam, ex harum dignissimos sed doloremque
      vel veniam quaerat obcaecati. Qui ratione, praesentium ullam deserunt iste quae reiciendis deleniti
      laudantium voluptatum omnis nostrum voluptates? Debitis vel commodi praesentium vitae et sapiente
      consequatur culpa. Nam dignissimos dolor vitae recusandae mollitia incidunt, laudantium quae soluta
      velit ad! Quod voluptate ea sint molestias error nisi praesentium. Vero, tempora! Tempore est ad quas
      voluptate eaque sint ipsum ipsam perferendis accusantium laborum consectetur debitis, maiores possimus
      dignissimos quaerat fugiat aspernatur minima aperiam quisquam sit perspiciatis incidunt. At,
      exercitationem recusandae atque laborum nobis quas dolorum? Id quaerat corrupti vel sint expedita harum
      deleniti possimus deserunt nihil, aut est recusandae dolor illum aliquam eos cupiditate dolore totam,
      labore ipsa officiis veniam earum laudantium. Dicta officia iure beatae, vitae, dolore impedit
      perspiciatis vel, dolorum eligendi aliquam laboriosam? Expedita ratione sequi repellendus consectetur
      eaque fugiat quo deleniti laboriosam. Quibusdam quas, ducimus suscipit debitis cum nostrum earum hic
      dignissimos dolores natus dicta cumque culpa et neque sit labore molestiae eveniet corrupti, minima,
      pariatur facere. Pariatur labore qui aspernatur reiciendis, doloremque tenetur minus? Ex dolorum atque
      labore cum consequatur architecto ipsa totam. Fuga ducimus
    </div>
  </ng-template>
  <ng-template
    [prizmStepperStep]="4"
    [title]="steps[4].title"
    [status]="steps[4].status"
    [disabled]="steps[4].disabled"
  >
    <div>
      <prizm-select
        [(ngModel)]="steps[4].status"
        [items]="statusItems"
        [label]="'Состояние'"
        [forceClear]="false"
      >
      </prizm-select>
      <div class="next-step-disabled-container">
        <prizm-checkbox [(ngModel)]="steps[5].disabled">Шаг 5 disabled</prizm-checkbox>
      </div>
    </div>
    <br />
    <div>
      laborum! Deserunt vitae natus tempore ipsam voluptas quibusdam iure repudiandae odio voluptates, iusto
      esse culpa vel non repellat eaque assumenda totam hic quae fugiat reprehenderit amet minus perspiciatis.
      Blanditiis velit dolor nulla sapiente iusto sunt ipsa dignissimos deleniti laboriosam laudantium
      consequuntur error ipsam expedita, molestiae quisquam itaque eos amet tempore rerum? Dolor nihil soluta
      maxime fugiat illo veniam, sint consectetur, possimus dicta ratione culpa dignissimos asperiores enim
      eveniet amet recusandae quos, expedita sunt. Reprehenderit pariatur inventore dignissimos ab eum nisi,
      odio quia ut mollitia at dolorem minima provident eos laborum debitis recusandae asperiores saepe sed
      placeat quod nostrum harum dolores unde? Reiciendis deserunt illo ratione obcaecati explicabo, totam
      animi tenetur sed debitis labore recusandae unde amet? Non ab doloribus laudantium culpa voluptatum,
      consequuntur ex sequi nostrum sint itaque architecto ratione quaerat cumque perferendis consectetur
      soluta facere neque ut quae esse sed necessitatibus commodi atque? Dicta cum ratione rem, accusamus
      natus nulla. Sapiente soluta in aperiam sed quidem sunt reprehenderit, exercitationem ipsam voluptate
      quibusdam voluptatibus aspernatur, voluptatum facilis sequi, asperiores similique dicta ab? Facere
      perspiciatis maxime doloremque accusamus illum. Quo, minus asperiores totam accusantium exercitationem
      expedita omnis doloribus veniam. Dolores commodi temporibus quaerat pariatur aperiam cum animi non ad
      quibusdam recusandae voluptatem est excepturi incidunt consequuntur laudantium, ipsa, laboriosam
      asperiores sint autem quasi modi nam quos amet nesciunt! Quia facere minus optio est voluptatibus
      dolores facilis quo distinctio placeat iusto praesentium beatae odio provident, dicta iste fugit enim
      hic ea dolor earum! Doloremque nostrum eligendi excepturi atque, animi iste ipsa laborum dolor quibusdam
      inventore facere
    </div>
  </ng-template>

  <ng-template
    [prizmStepperStep]="5"
    [title]="steps[5].title"
    [status]="steps[5].status"
    [disabled]="steps[5].disabled"
  >
    <div>
      <prizm-select
        [(ngModel)]="steps[5].status"
        [items]="statusItems"
        [label]="'Состояние'"
        [forceClear]="false"
      >
      </prizm-select>
    </div>
    <br />
    <div>
      modi blanditiis itaque laudantium necessitatibus, harum a facere! Placeat rem quas cum esse animi, ut
      officiis aliquam voluptatem autem eveniet excepturi earum temporibus praesentium, laboriosam ipsam,
      porro quis reiciendis. Vero delectus tenetur voluptates sapiente ullam ipsa saepe itaque rem iusto
      pariatur possimus ea rerum, ducimus quaerat sunt quis temporibus sed suscipit. Est impedit rem iure quam
      nisi dolor odio. Tempora, natus atque quae totam pariatur quibusdam quasi rem enim, earum, iste est
      ducimus amet cum reprehenderit architecto. Corrupti similique a est, laboriosam alias non, sequi optio
      quaerat officiis, temporibus provident exercitationem aspernatur reprehenderit sapiente commodi atque
      quis quas voluptates deleniti maiores explicabo velit illum laudantium! Sit cum quas ratione.
      Reprehenderit, asperiores doloribus sed dolore quos exercitationem. Officia tenetur doloremque
      reiciendis sunt! Dolorum, consectetur maiores necessitatibus harum, nostrum magni hic numquam incidunt
      dolores voluptatibus corporis rem
    </div>
  </ng-template>

  <div class="footer" prizmStepperFooter>
    <button
      [disabled]="toPrevStepDisabled"
      (click)="toPrevStep()"
      prizmButton
      appearanceType="outline"
      appearance="primary"
      size="l"
    >
      Предыдущий шаг
    </button>
    <button
      *ngIf="currentStep !== 5"
      [disabled]="toNextStepDisabled"
      (click)="toNextStep()"
      prizmButton
      appearanceType="outline"
      appearance="primary"
      size="l"
    >
      Следующий шаг
    </button>

    <button *ngIf="currentStep === 5" prizmButton appearanceType="outline" appearance="success" size="l">
      Завершить
    </button>
  </div>
</prizm-stepper>
`;
  result: string;

  public ngOnInit(): void {
    this.parse();
  }

  private parse(): void {
    const parsed = prizmAstHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
  }
}
