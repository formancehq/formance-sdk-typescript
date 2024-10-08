/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BankingCircleConfig = {
  authorizationEndpoint: string;
  endpoint: string;
  name: string;
  password: string;
  /**
   * The frequency at which the connector will try to fetch new BalanceTransaction objects from Banking Circle API.
   *
   * @remarks
   */
  pollingPeriod?: string | undefined;
  userCertificate: string;
  userCertificateKey: string;
  username: string;
};

/** @internal */
export const BankingCircleConfig$inboundSchema: z.ZodType<
  BankingCircleConfig,
  z.ZodTypeDef,
  unknown
> = z.object({
  authorizationEndpoint: z.string(),
  endpoint: z.string(),
  name: z.string(),
  password: z.string(),
  pollingPeriod: z.string().default("120s"),
  userCertificate: z.string(),
  userCertificateKey: z.string(),
  username: z.string(),
});

/** @internal */
export type BankingCircleConfig$Outbound = {
  authorizationEndpoint: string;
  endpoint: string;
  name: string;
  password: string;
  pollingPeriod: string;
  userCertificate: string;
  userCertificateKey: string;
  username: string;
};

/** @internal */
export const BankingCircleConfig$outboundSchema: z.ZodType<
  BankingCircleConfig$Outbound,
  z.ZodTypeDef,
  BankingCircleConfig
> = z.object({
  authorizationEndpoint: z.string(),
  endpoint: z.string(),
  name: z.string(),
  password: z.string(),
  pollingPeriod: z.string().default("120s"),
  userCertificate: z.string(),
  userCertificateKey: z.string(),
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankingCircleConfig$ {
  /** @deprecated use `BankingCircleConfig$inboundSchema` instead. */
  export const inboundSchema = BankingCircleConfig$inboundSchema;
  /** @deprecated use `BankingCircleConfig$outboundSchema` instead. */
  export const outboundSchema = BankingCircleConfig$outboundSchema;
  /** @deprecated use `BankingCircleConfig$Outbound` instead. */
  export type Outbound = BankingCircleConfig$Outbound;
}
