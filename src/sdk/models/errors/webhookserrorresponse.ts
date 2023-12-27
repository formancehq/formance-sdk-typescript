/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { WebhooksErrorsEnum } from "./webhookserrorsenum";
import { classToPlain, Expose } from "class-transformer";

export class WebhooksErrorResponse extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "details" })
    details?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "errorCode" })
    errorCode: WebhooksErrorsEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage: string;

    constructor(err?: WebhooksErrorResponse) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "WebhooksErrorResponse";
        Object.setPrototypeOf(this, WebhooksErrorResponse.prototype);
    }
}
