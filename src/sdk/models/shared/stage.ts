/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { StageDelay, StageDelay$ } from "./stagedelay";
import { StageSend, StageSend$ } from "./stagesend";
import { StageWaitEvent, StageWaitEvent$ } from "./stagewaitevent";
import { Update, Update$ } from "./update";
import * as z from "zod";

export type Stage = StageWaitEvent | Update | StageDelay | StageSend;

/** @internal */
export namespace Stage$ {
    export const inboundSchema: z.ZodType<Stage, z.ZodTypeDef, unknown> = z.union([
        StageWaitEvent$.inboundSchema,
        Update$.inboundSchema,
        StageDelay$.inboundSchema,
        StageSend$.inboundSchema,
    ]);

    export type Outbound =
        | StageWaitEvent$.Outbound
        | Update$.Outbound
        | StageDelay$.Outbound
        | StageSend$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Stage> = z.union([
        StageWaitEvent$.outboundSchema,
        Update$.outboundSchema,
        StageDelay$.outboundSchema,
        StageSend$.outboundSchema,
    ]);
}
