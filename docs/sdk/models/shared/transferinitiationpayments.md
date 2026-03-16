# TransferInitiationPayments

## Example Usage

```typescript
import { LegacyPaymentStatus, TransferInitiationPayments } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationPayments = {
  createdAt: new Date("2026-08-10T05:37:08.261Z"),
  paymentID: "<id>",
  status: LegacyPaymentStatus.Pending,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `paymentID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.LegacyPaymentStatus](../../../sdk/models/shared/legacypaymentstatus.md)               | :heavy_check_mark:                                                                            | N/A                                                                                           |