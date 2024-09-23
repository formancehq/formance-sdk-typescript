# TransferInitiationPayments

## Example Usage

```typescript
import { TransferInitiationPayments, TransferInitiationStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationPayments = {
  createdAt: new Date("2024-08-16T19:51:12.559Z"),
  error: "<value>",
  paymentID: "<value>",
  status: TransferInitiationStatus.AskRetried,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.TransferInitiationStatus](../../../sdk/models/shared/transferinitiationstatus.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |