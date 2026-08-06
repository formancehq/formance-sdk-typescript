# TransferInitiationPayments

## Example Usage

```typescript
import { TransferInitiationPayments } from "@formance/formance-sdk/sdk/models/payments";

let value: TransferInitiationPayments = {
  createdAt: new Date("2026-08-10T05:37:08.261Z"),
  paymentID: "<id>",
  status: "PENDING",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `paymentID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [payments.LegacyPaymentStatus](../../../sdk/models/payments/legacypaymentstatus.md)           | :heavy_check_mark:                                                                            | N/A                                                                                           |