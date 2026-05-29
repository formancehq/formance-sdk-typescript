# TransferInitiationAdjustments

## Example Usage

```typescript
import { TransferInitiationAdjustments, TransferInitiationStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationAdjustments = {
  transferInitiationStatus: TransferInitiationStatus.Rejected,
  adjustmentID: "<id>",
  createdAt: new Date("2026-11-04T07:58:22.164Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `transferInitiationStatus`                                                                    | [payments.TransferInitiationStatus](../../../sdk/models/payments/transferinitiationstatus.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |