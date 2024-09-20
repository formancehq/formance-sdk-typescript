# TransferInitiationAdjusments

## Example Usage

```typescript
import { TransferInitiationAdjusments, TransferInitiationStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TransferInitiationAdjusments = {
  adjustmentID: "<value>",
  createdAt: new Date("2023-09-22T03:20:01.030Z"),
  error: "<value>",
  status: TransferInitiationStatus.Failed,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentID`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.TransferInitiationStatus](../../../sdk/models/shared/transferinitiationstatus.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |