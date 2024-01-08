/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentScheme } from "./paymentscheme";
import { PaymentStatus } from "./paymentstatus";
import { PaymentType } from "./paymenttype";
import { Expose, Transform } from "class-transformer";

export class PaymentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "asset" })
    asset: string;

    @SpeakeasyMetadata()
    @Expose({ name: "connectorID" })
    connectorID: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "destinationAccountID" })
    destinationAccountID?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scheme" })
    scheme: PaymentScheme;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceAccountID" })
    sourceAccountID?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PaymentStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PaymentType;
}
