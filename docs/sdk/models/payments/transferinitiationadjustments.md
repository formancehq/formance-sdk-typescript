# TransferInitiationAdjustments

## Example Usage

```typescript
import { TransferInitiationAdjustments } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationAdjustments = {
  adjustmentID: "<id>",
  createdAt: new Date("2025-02-11T03:16:34.696Z"),
  status: "REVERSED",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the adjustment                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the adjustment was recorded                                                              |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why this step failed, absent when it succeeded                                                |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Arbitrary key/value pairs attached to the adjustment                                          |
| `status`                                                                                      | [payments.TransferInitiationStatus](../../../sdk/models/payments/transferinitiationstatus.md) | :heavy_check_mark:                                                                            | Where a transfer initiation stands in its lifecycle                                           |