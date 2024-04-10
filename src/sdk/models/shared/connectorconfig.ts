/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AdyenConfig, AdyenConfig$ } from "./adyenconfig";
import { AtlarConfig, AtlarConfig$ } from "./atlarconfig";
import { BankingCircleConfig, BankingCircleConfig$ } from "./bankingcircleconfig";
import { CurrencyCloudConfig, CurrencyCloudConfig$ } from "./currencycloudconfig";
import { DummyPayConfig, DummyPayConfig$ } from "./dummypayconfig";
import { GenericConfig, GenericConfig$ } from "./genericconfig";
import { MangoPayConfig, MangoPayConfig$ } from "./mangopayconfig";
import { ModulrConfig, ModulrConfig$ } from "./modulrconfig";
import { MoneycorpConfig, MoneycorpConfig$ } from "./moneycorpconfig";
import { StripeConfig, StripeConfig$ } from "./stripeconfig";
import { WiseConfig, WiseConfig$ } from "./wiseconfig";
import * as z from "zod";

export type ConnectorConfig =
    | WiseConfig
    | StripeConfig
    | GenericConfig
    | ModulrConfig
    | CurrencyCloudConfig
    | MangoPayConfig
    | MoneycorpConfig
    | AdyenConfig
    | DummyPayConfig
    | AtlarConfig
    | BankingCircleConfig;

/** @internal */
export namespace ConnectorConfig$ {
    export type Inbound =
        | WiseConfig$.Inbound
        | StripeConfig$.Inbound
        | GenericConfig$.Inbound
        | ModulrConfig$.Inbound
        | CurrencyCloudConfig$.Inbound
        | MangoPayConfig$.Inbound
        | MoneycorpConfig$.Inbound
        | AdyenConfig$.Inbound
        | DummyPayConfig$.Inbound
        | AtlarConfig$.Inbound
        | BankingCircleConfig$.Inbound;

    export type Outbound =
        | WiseConfig$.Outbound
        | StripeConfig$.Outbound
        | GenericConfig$.Outbound
        | ModulrConfig$.Outbound
        | CurrencyCloudConfig$.Outbound
        | MangoPayConfig$.Outbound
        | MoneycorpConfig$.Outbound
        | AdyenConfig$.Outbound
        | DummyPayConfig$.Outbound
        | AtlarConfig$.Outbound
        | BankingCircleConfig$.Outbound;
    export const inboundSchema: z.ZodType<ConnectorConfig, z.ZodTypeDef, Inbound> = z.union([
        WiseConfig$.inboundSchema,
        StripeConfig$.inboundSchema,
        GenericConfig$.inboundSchema,
        ModulrConfig$.inboundSchema,
        CurrencyCloudConfig$.inboundSchema,
        MangoPayConfig$.inboundSchema,
        MoneycorpConfig$.inboundSchema,
        AdyenConfig$.inboundSchema,
        DummyPayConfig$.inboundSchema,
        AtlarConfig$.inboundSchema,
        BankingCircleConfig$.inboundSchema,
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorConfig> = z.union([
        WiseConfig$.outboundSchema,
        StripeConfig$.outboundSchema,
        GenericConfig$.outboundSchema,
        ModulrConfig$.outboundSchema,
        CurrencyCloudConfig$.outboundSchema,
        MangoPayConfig$.outboundSchema,
        MoneycorpConfig$.outboundSchema,
        AdyenConfig$.outboundSchema,
        DummyPayConfig$.outboundSchema,
        AtlarConfig$.outboundSchema,
        BankingCircleConfig$.outboundSchema,
    ]);
}
