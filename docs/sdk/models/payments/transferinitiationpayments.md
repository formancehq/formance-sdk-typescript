# TransferInitiationPayments

## Example Usage

```typescript
import { LegacyPaymentStatus, TransferInitiationPayments } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationPayments = {
  legacyPaymentStatus: LegacyPaymentStatus.ReverseFailed,
  createdAt: new Date("2024-02-15T18:11:13.157Z"),
  paymentID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `legacyPaymentStatus`                                                                         | [payments.LegacyPaymentStatus](../../../sdk/models/payments/legacypaymentstatus.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `paymentID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |