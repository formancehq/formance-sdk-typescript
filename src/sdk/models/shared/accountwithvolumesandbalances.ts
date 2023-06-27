/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AccountWithVolumesAndBalancesMetadata extends SpeakeasyBase {}

export class AccountWithVolumesAndBalances extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address: string;

    @SpeakeasyMetadata()
    @Expose({ name: "balances" })
    balances?: Record<string, number>;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => AccountWithVolumesAndBalancesMetadata)
    metadata?: AccountWithVolumesAndBalancesMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "volumes" })
    volumes?: Record<string, Record<string, number>>;
}