/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connector } from "./connector";
import { PaymentAdjustment } from "./paymentadjustment";
import { PaymentScheme } from "./paymentscheme";
import { PaymentStatus } from "./paymentstatus";
import { PaymentType } from "./paymenttype";
import { Expose, Transform, Type } from "class-transformer";

export class PaymentRaw extends SpeakeasyBase {}

export class Payment extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: PaymentAdjustment })
    @Expose({ name: "adjustments" })
    @Type(() => PaymentAdjustment)
    adjustments: PaymentAdjustment[];

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
    destinationAccountID: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "initialAmount" })
    initialAmount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider?: Connector;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PaymentRaw)
    raw: PaymentRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scheme" })
    scheme: PaymentScheme;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceAccountID" })
    sourceAccountID: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PaymentStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PaymentType;
}
