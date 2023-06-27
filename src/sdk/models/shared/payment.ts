/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connector } from "./connector";
import { PaymentAdjustment } from "./paymentadjustment";
import { PaymentMetadata } from "./paymentmetadata";
import { PaymentStatus } from "./paymentstatus";
import { Expose, Transform, Type } from "class-transformer";

export class PaymentRaw extends SpeakeasyBase {}

export enum PaymentScheme {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Diners = "diners",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    SepaDebit = "sepa debit",
    SepaCredit = "sepa credit",
    Sepa = "sepa",
    ApplePay = "apple pay",
    GooglePay = "google pay",
    A2a = "a2a",
    AchDebit = "ach debit",
    Ach = "ach",
    Rtp = "rtp",
    Unknown = "unknown",
    Other = "other",
}

export enum PaymentType {
    PayIn = "PAY-IN",
    Payout = "PAYOUT",
    Transfer = "TRANSFER",
    Other = "OTHER",
}

export class Payment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountID" })
    accountID: string;

    @SpeakeasyMetadata({ elemType: PaymentAdjustment })
    @Expose({ name: "adjustments" })
    @Type(() => PaymentAdjustment)
    adjustments: PaymentAdjustment[];

    @SpeakeasyMetadata()
    @Expose({ name: "asset" })
    asset: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "initialAmount" })
    initialAmount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => PaymentMetadata)
    metadata: PaymentMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: Connector;

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
    @Expose({ name: "status" })
    status: PaymentStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PaymentType;
}