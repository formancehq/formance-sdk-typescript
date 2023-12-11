/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connector } from "./connector";
import { Expose, Transform, Type } from "class-transformer";

export class PaymentsAccountRaw extends SpeakeasyBase {}

export class PaymentsAccount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountName" })
    accountName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultAsset" })
    defaultAsset: string;

    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "defaultCurrency" })
    defaultCurrency: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "provider" })
    provider: Connector;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    @Type(() => PaymentsAccountRaw)
    raw: PaymentsAccountRaw;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}
