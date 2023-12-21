/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PaymentStatus } from "./paymentstatus";
import { Expose, Transform } from "class-transformer";

export class TransferInitiationPayments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentID" })
    paymentID: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: PaymentStatus;
}
