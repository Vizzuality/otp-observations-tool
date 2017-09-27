import { TableFilterBehavior } from 'app/shared/table-filter/table-filter.behavior';
import { OperatorsService } from 'app/services/operators.service';
import { Operator } from 'app/models/operator.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

export enum OperatorTypes {
  'Artisanal' = 'Artisanal',
  'Community forest' = 'Community forest',
  'Estate' = 'Estate',
  'Industrial agriculture' = 'Industrial agriculture',
  'Logging company' = 'Logging company',
  'Mining company' = 'Mining company',
  'Other' = 'Other',
  'Sawmill' = 'Sawmill',
  'Unknown' = 'Unknown'
}

@Component({
  selector: 'otp-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent extends TableFilterBehavior {

  operatorTypes = Object.keys(OperatorTypes);

  constructor(
    protected service: OperatorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  triggerNewOperator(): void{
    this.router.navigate(['private/fields/operators/new']);
  }

  onEdit(row): void {
    // Without relativeTo, the navigation doesn't work properly
    this.router.navigate([`edit/${row.id}`], { relativeTo: this.route });
  }

}
