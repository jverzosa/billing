import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyForm } from '../_models/company-form.model';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit{
  formRows: any = [
    {
      isSingleField: true,
      isSectionTitle: false,
      fieldConfig: { id: 'name', name: 'Company', icon: 'business', }
    },
    {
      isSingleField: false,
      fields: [
        { id: 'phone', name: 'Phone', icon: 'phone_iphone', isLookup: false },
        { id: 'email', name: 'Email', icon: 'email', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'fax', name: 'Fax', icon: 'fax', isLookup: false },
        { id: 'logo', name: 'Logo', icon: 'face', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'website', name: 'Website', icon: 'public', isLookup: false },
        { id: 'groupName', name: 'Group Name', icon: 'group', isLookup: false },
      ]
    },
    {
      isSingleField: true,
      isSectionTitle: true,
      title: 'Shipping Details'
    },
    {
      isSingleField: false,
      fields: [
        { id: 'shippingAddress', name: 'Shipping Address', icon: 'local_shipping', isLookup: false },
        { id: 'shippingPostCode', name: 'Shipping Post Code', icon: 'local_post_office', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'shippingState', name: 'Shipping State', icon: 'domain', isLookup: false },
        { id: 'shippingSuburb', name: 'Shipping Suburb', icon: 'local_activity', isLookup: false },
      ]
    },
    {
      isSingleField: true,
      isSectionTitle: true,
      title: 'Billing Details'
    },
    {
      isSingleField: true,
      isSectionTitle: false,
      fieldConfig: { id: 'billingName', name: 'Billing Name', icon: 'receipt', },
    },
    {
      isSingleField: false,
      fields: [
        { id: 'billingAddress', name: 'Billing Address', icon: 'local_shipping', isLookup: false },
        { id: 'billingPostCode', name: 'Billing Post Code', icon: 'local_post_office', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'billingState', name: 'Billing State', icon: 'domain', isLookup: false },
        { id: 'billingSuburb', name: 'Billing Suburb', icon: 'local_activity', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'billingEmail', name: 'Billing Email', icon: 'email', isLookup: false },
      ]
    },
    {
      isSingleField: true,
      isSectionTitle: true,
      title: 'Roles'
    },
    {
      isSingleField: false,
      fields: [
        { id: 'companyAdminRoleId', name: 'Company Manager Role', isLookup: true },
        { id: 'centerManagerRoleId', name: 'Center Manager Role', isLookup: true },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'purchaseOrderViewerRoleId', name: 'Purchase Order Viewer Role', isLookup: true },
        { id: 'companyFMRoleId', name: 'Company FM Role', isLookup: true },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'safetyForumParticipantsRoleId', name: 'Safety Forum Participants Role', isLookup: true },
      ]
    },
    {
      isSingleField: true,
      isSectionTitle: true,
      title: 'Other Details'
    },
    {
      isSingleField: false,
      fields: [
        { id: 'aBN', name: 'ABN', isLookup: false },
        { id: 'aCN', name: 'ACN', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'incidentFormDisplayName', name: 'Incident Form Display Name', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'cMLDisplayName', name: 'CML Display Name', isLookup: false },
        { id: 'cMLBookingDisplayName', name: 'CML Booking Display Name', isLookup: false },
      ]
    },
    {
      isSingleField: false,
      fields: [
        { id: 'accountsShortName', name: 'Accounts Short Name', isLookup: false },
        { id: 'sharePointShortName', name: 'Share Point Short Name', isLookup: false },
      ]
    },
    {
      isSingleField: true,
      isSectionTitle: false,
      isTextArea: true,
      fieldConfig: { id: 'generalComments', name: 'General Comments' }
    },
  ];
  form: UntypedFormGroup;
  roles = [
    { id: 1, name: 'Company Manager' },
    { id: 2, name: 'Center Manager' },
    { id: 3, name: 'Purchase Order Viewer' },
    { id: 4, name: 'Company FM' },
    { id: 5, name: 'Safety Forum Participants' },
  ]
  
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
  ) {
    this.form = this.formBuilder.group(new CompanyForm());
   }

  ngOnInit(): void {
  }

  save() {
    
  }

  cancel() {
    
  }
}
