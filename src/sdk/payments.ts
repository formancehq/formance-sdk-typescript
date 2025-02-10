/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { SDKPaymentsV1 } from "./sdkpaymentsv1.js";
import { V3 } from "./v3.js";

export class Payments extends ClientSDK {
  private _v1?: SDKPaymentsV1;
  get v1(): SDKPaymentsV1 {
    return (this._v1 ??= new SDKPaymentsV1(this._options));
  }

  private _v3?: V3;
  get v3(): V3 {
    return (this._v3 ??= new V3(this._options));
  }
}
