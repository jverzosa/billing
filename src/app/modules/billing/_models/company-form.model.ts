import { UntypedFormControl } from '@angular/forms';
import { Company } from './company';

export class CompanyForm {
    id = new UntypedFormControl();
    name = new UntypedFormControl();
    phone = new UntypedFormControl();
    email = new UntypedFormControl();
    fax = new UntypedFormControl();
    generalComments = new UntypedFormControl();
    created = new UntypedFormControl();
    createdBy = new UntypedFormControl();
    updated = new UntypedFormControl();
    updatedBy = new UntypedFormControl();
    aBN = new UntypedFormControl();
    aCN = new UntypedFormControl();
    website = new UntypedFormControl();
    logo = new UntypedFormControl();
    billingName = new UntypedFormControl();
    billingAddress = new UntypedFormControl();
    billingPostCode = new UntypedFormControl();
    billingState = new UntypedFormControl();
    billingSuburb = new UntypedFormControl();
    billingEmail = new UntypedFormControl();
    shippingAddress = new UntypedFormControl();
    shippingPostCode = new UntypedFormControl();
    shippingState = new UntypedFormControl();
    shippingSuburb = new UntypedFormControl();
    flactive = new UntypedFormControl();
    incidentFormDisplayName = new UntypedFormControl();
    cMLDisplayName = new UntypedFormControl();
    companyAdminRoleId = new UntypedFormControl();
    cMLBookingDisplayName = new UntypedFormControl();
    centerManagerRoleId = new UntypedFormControl();
    companyFMRoleId = new UntypedFormControl();
    safetyForumParticipantsRoleId = new UntypedFormControl();
    accountsShortName = new UntypedFormControl();
    sharePointShortName = new UntypedFormControl();
    groupName = new UntypedFormControl();
    purchaseOrderViewerRoleId = new UntypedFormControl();

    constructor(model?: Company) {
        if (model) {
            this.id.setValue(model.id);
            this.name.setValue(model.name);
            this.phone.setValue(model.phone);
            this.email.setValue(model.email);
            this.fax.setValue(model.fax);
            this.generalComments.setValue(model.generalComments);
            this.created.setValue(model.created);
            this.createdBy.setValue(model.createdBy);
            this.updated.setValue(model.updated);
            this.updatedBy.setValue(model.updatedBy);
            this.aBN.setValue(model.aBN);
            this.aCN.setValue(model.aCN);
            this.website.setValue(model.website);
            this.logo.setValue(model.logo);
            this.billingName.setValue(model.billingName);
            this.billingAddress.setValue(model.billingAddress);
            this.billingPostCode.setValue(model.billingPostCode);
            this.billingState.setValue(model.billingState);
            this.billingSuburb.setValue(model.billingSuburb);
            this.billingEmail.setValue(model.billingEmail);
            this.shippingAddress.setValue(model.shippingAddress);
            this.shippingPostCode.setValue(model.shippingPostCode);
            this.shippingState.setValue(model.shippingState);
            this.shippingSuburb.setValue(model.shippingSuburb);
            this.flactive.setValue(model.flactive);
            this.incidentFormDisplayName.setValue(model.incidentFormDisplayName);
            this.cMLDisplayName.setValue(model.cMLDisplayName);
            this.companyAdminRoleId.setValue(model.companyAdminRoleId);
            this.cMLBookingDisplayName.setValue(model.cMLBookingDisplayName);
            this.centerManagerRoleId.setValue(model.centerManagerRoleId);
            this.companyFMRoleId.setValue(model.companyFMRoleId);
            this.safetyForumParticipantsRoleId.setValue(model.safetyForumParticipantsRoleId);
            this.accountsShortName.setValue(model.accountsShortName);
            this.sharePointShortName.setValue(model.sharePointShortName);
            this.groupName.setValue(model.groupName);
            this.purchaseOrderViewerRoleId.setValue(model.purchaseOrderViewerRoleId);
        }
    }
}