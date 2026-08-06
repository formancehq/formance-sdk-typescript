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
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.TransferInitiationStatus](../../../sdk/models/payments/transferinitiationstatus.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |