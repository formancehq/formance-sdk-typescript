/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Sdkv1 } from "./sdkv1.js";
import { V2 } from "./v2.js";

export class Ledger extends ClientSDK {
  private _v2?: V2;
  get v2(): V2 {
    return (this._v2 ??= new V2(this._options));
  }

  private _v1?: Sdkv1;
  get v1(): Sdkv1 {
    return (this._v1 ??= new Sdkv1(this._options));
  }
}
