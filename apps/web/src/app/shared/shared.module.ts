import { NgModule } from '@angular/core';
import { SortOrderPipe } from '../shared/pipes/sort-order.pipe';
//import { DropdownBoxComponent } from '../shared/components/dropdown-box/dropdown-box.component';
import { CommonModule } from '@angular/common';
//import { CustomizeDsrColumnComponent } from '../shared/components/customize-dsr-column/customize-dsr-column.component';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { ModelPopupComponent } from '../shared/components/model-popup/model-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from "../app-material.module";
import {FilterPipe} from '../shared/pipes/filter.pipe';
import { SortablejsModule } from 'ngx-sortablejs';
import {ModalPopupComponent} from './components/modal-popup/modal-popup.component';
// import { ScheduleDsrComponent } from './components/schedule-dsr/schedule-dsr.component'
//import { PODetailsComponent } from './components/podetails/podetails.component';
// import { CargodetailsComponent } from './components/cargodetails/cargodetails.component';
// import { DocumentsComponent } from './components/documents/documents.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import * as filterComponent from './components/filter/filter.component';
// import * as filterItemsComponent from './components/filter/filter-items/filter-items.component';
// import * as filterComponentV2 from './components/filter-v2/filter.component';
// import * as filterItemsComponentV2 from './components/filter-v2/filter-items/filter-items.component';
// import { SearchFilterPipe } from './components/filter/filter-items/search-filter.pipe';
// import { ScrollFilterItemsIntoViewDirective } from './components/filter/filter-items/scroll-filter-items-into-view.directive';
// import { HighlightFilterLeftnavDirective } from './components/filter/filter-items/highlight-filter-leftnav.directive';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { CurrencyFresconPipe } from './pipes/currency-frescon.pipe';
// import { HasAnyFilterPipe } from './components/filter/has-any-filter.pipe';
// import { ScheduleDsrV2Component } from './components/schedule-dsr-v2/schedule-dsr-v2.component';
// import { ScheduleDsrPopupComponent } from './components/schedule-dsr-v2/schedule-dsr-popup/schedule-dsr-popup.component';
// import { GridViewComponent } from '../shipmentspage/custom-grid/grid-view/grid-view.component';
// import { AgGridModule } from 'ag-grid-angular';
import { NotificationComponent } from '../dashboardpage/notification/notification.component';
// import { CopyButtonRendererComponent } from '../ebookingpage/copy-button-renderer/copy-button-renderer.component';
// import { CustomerComponent } from '../header/customer/customer.component';
import { PasswordPopupComponent } from '../header/password-popup/password-popup.component';
// import { AgentHblListComponent } from './components/agent-hbl-list/agent-hbl-list.component';
import { PopupModelComponent } from './components/popup-model/popup-model.component';

@NgModule({ 
  declarations: [
    SortOrderPipe,
    // DropdownBoxComponent,
    // CustomizeDsrColumnComponent,
   SearchBoxComponent,
    ModelPopupComponent,
    FilterPipe,
    ModalPopupComponent,
    // ScheduleDsrComponent,
    // CargodetailsComponent,
    //PODetailsComponent,
    //DocumentsComponent,
    CurrencyFresconPipe,
    // ScheduleDsrV2Component,
    // ScheduleDsrPopupComponent,
    // CustomerComponent,
    // filterComponent.FilterComponent,
    // filterItemsComponent.FilterItemsComponent,
    // filterComponentV2.FilterComponent,
    // filterItemsComponentV2.FilterItemsComponent,
    // SearchFilterPipe,
    // ScrollFilterItemsIntoViewDirective,
    // HighlightFilterLeftnavDirective,
    CurrencyFresconPipe,
    // HasAnyFilterPipe,
    // GridViewComponent,
    NotificationComponent,
    PasswordPopupComponent,
    //AgentHblListComponent,
    PopupModelComponent
    //GridViewComponent,
    //NotificationComponent,
    //PasswordPopupComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    SortablejsModule,
    SatDatepickerModule,
    SatNativeDateModule,
    ReactiveFormsModule,
   // AgGridModule.withComponents([CopyButtonRendererComponent]),
  ],
  exports:[
    SortOrderPipe,
    FilterPipe,
    // DropdownBoxComponent,
    // CustomizeDsrColumnComponent,
   SearchBoxComponent,
    ModelPopupComponent,
    ModalPopupComponent,
    // ScheduleDsrComponent,
    // CargodetailsComponent,
    //PODetailsComponent,
   // DocumentsComponent,
    CurrencyFresconPipe,
    // ScheduleDsrV2Component,
    // ScheduleDsrPopupComponent,
    // CustomerComponent,
    CurrencyFresconPipe,
   // GridViewComponent,
    NotificationComponent,
    PasswordPopupComponent, 
    // filterComponent.FilterComponent,
    // filterItemsComponent.FilterItemsComponent,
    // filterComponentV2.FilterComponent,
    // filterItemsComponentV2.FilterItemsComponent,
    CurrencyFresconPipe,
  ]

})
export class SharedModule {}
