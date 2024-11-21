/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Account,
  Account$inboundSchema,
  Account$Outbound,
  Account$outboundSchema,
} from "./account.js";

export type AccountsCursorResponseCursor = {
  data: Array<Account>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

export type AccountsCursorResponse = {
  cursor: AccountsCursorResponseCursor;
};

/** @internal */
export const AccountsCursorResponseCursor$inboundSchema: z.ZodType<
  AccountsCursorResponseCursor,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Account$inboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/** @internal */
export type AccountsCursorResponseCursor$Outbound = {
  data: Array<Account$Outbound>;
  hasMore: boolean;
  next?: string | undefined;
  pageSize: number;
  previous?: string | undefined;
};

/** @internal */
export const AccountsCursorResponseCursor$outboundSchema: z.ZodType<
  AccountsCursorResponseCursor$Outbound,
  z.ZodTypeDef,
  AccountsCursorResponseCursor
> = z.object({
  data: z.array(Account$outboundSchema),
  hasMore: z.boolean(),
  next: z.string().optional(),
  pageSize: z.number().int(),
  previous: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCursorResponseCursor$ {
  /** @deprecated use `AccountsCursorResponseCursor$inboundSchema` instead. */
  export const inboundSchema = AccountsCursorResponseCursor$inboundSchema;
  /** @deprecated use `AccountsCursorResponseCursor$outboundSchema` instead. */
  export const outboundSchema = AccountsCursorResponseCursor$outboundSchema;
  /** @deprecated use `AccountsCursorResponseCursor$Outbound` instead. */
  export type Outbound = AccountsCursorResponseCursor$Outbound;
}

export function accountsCursorResponseCursorToJSON(
  accountsCursorResponseCursor: AccountsCursorResponseCursor,
): string {
  return JSON.stringify(
    AccountsCursorResponseCursor$outboundSchema.parse(
      accountsCursorResponseCursor,
    ),
  );
}

export function accountsCursorResponseCursorFromJSON(
  jsonString: string,
): SafeParseResult<AccountsCursorResponseCursor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountsCursorResponseCursor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountsCursorResponseCursor' from JSON`,
  );
}

/** @internal */
export const AccountsCursorResponse$inboundSchema: z.ZodType<
  AccountsCursorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.lazy(() => AccountsCursorResponseCursor$inboundSchema),
});

/** @internal */
export type AccountsCursorResponse$Outbound = {
  cursor: AccountsCursorResponseCursor$Outbound;
};

/** @internal */
export const AccountsCursorResponse$outboundSchema: z.ZodType<
  AccountsCursorResponse$Outbound,
  z.ZodTypeDef,
  AccountsCursorResponse
> = z.object({
  cursor: z.lazy(() => AccountsCursorResponseCursor$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCursorResponse$ {
  /** @deprecated use `AccountsCursorResponse$inboundSchema` instead. */
  export const inboundSchema = AccountsCursorResponse$inboundSchema;
  /** @deprecated use `AccountsCursorResponse$outboundSchema` instead. */
  export const outboundSchema = AccountsCursorResponse$outboundSchema;
  /** @deprecated use `AccountsCursorResponse$Outbound` instead. */
  export type Outbound = AccountsCursorResponse$Outbound;
}

export function accountsCursorResponseToJSON(
  accountsCursorResponse: AccountsCursorResponse,
): string {
  return JSON.stringify(
    AccountsCursorResponse$outboundSchema.parse(accountsCursorResponse),
  );
}

export function accountsCursorResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountsCursorResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountsCursorResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountsCursorResponse' from JSON`,
  );
}
