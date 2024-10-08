/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  StageDelay,
  StageDelay$inboundSchema,
  StageDelay$Outbound,
  StageDelay$outboundSchema,
} from "./stagedelay.js";
import {
  StageSend,
  StageSend$inboundSchema,
  StageSend$Outbound,
  StageSend$outboundSchema,
} from "./stagesend.js";
import {
  StageWaitEvent,
  StageWaitEvent$inboundSchema,
  StageWaitEvent$Outbound,
  StageWaitEvent$outboundSchema,
} from "./stagewaitevent.js";
import {
  Update,
  Update$inboundSchema,
  Update$Outbound,
  Update$outboundSchema,
} from "./update.js";

export type Stage = StageWaitEvent | Update | StageDelay | StageSend;

/** @internal */
export const Stage$inboundSchema: z.ZodType<Stage, z.ZodTypeDef, unknown> = z
  .union([
    StageWaitEvent$inboundSchema,
    Update$inboundSchema,
    StageDelay$inboundSchema,
    StageSend$inboundSchema,
  ]);

/** @internal */
export type Stage$Outbound =
  | StageWaitEvent$Outbound
  | Update$Outbound
  | StageDelay$Outbound
  | StageSend$Outbound;

/** @internal */
export const Stage$outboundSchema: z.ZodType<
  Stage$Outbound,
  z.ZodTypeDef,
  Stage
> = z.union([
  StageWaitEvent$outboundSchema,
  Update$outboundSchema,
  StageDelay$outboundSchema,
  StageSend$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Stage$ {
  /** @deprecated use `Stage$inboundSchema` instead. */
  export const inboundSchema = Stage$inboundSchema;
  /** @deprecated use `Stage$outboundSchema` instead. */
  export const outboundSchema = Stage$outboundSchema;
  /** @deprecated use `Stage$Outbound` instead. */
  export type Outbound = Stage$Outbound;
}
