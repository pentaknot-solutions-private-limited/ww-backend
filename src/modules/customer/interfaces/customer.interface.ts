import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly customerTypeId?: string;
  readonly salutationId?: string;
  readonly stateId?: string;
  readonly placeOfSupplyId?: string;
  readonly firstName?: string;
  readonly middleName?: string;
  readonly lastName?: string;
  readonly companyName?: string;
  readonly legalEntityName?: string;
  readonly addressLine1?: string;
  readonly addressLine2?: string;
  readonly city?: string;
  readonly pincode?: number;
  readonly mobileNo?: string;
  readonly altMobileNo?: string;
  readonly email?: string;
  readonly pan?: string;
  readonly gst?: string;
  readonly isActive?: Boolean;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
