# UpdateBankAccountMetadataRequest

## Example Usage

```typescript
import { UpdateBankAccountMetadataRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateBankAccountMetadataRequest = {
  updateBankAccountMetadataRequest: {
    bankAccountMetadata: {
      "key": "<value>",
    },
  },
  bankAccountId: "XXX",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `updateBankAccountMetadataRequest`                                                                            | [payments.UpdateBankAccountMetadataRequest](../../../sdk/models/payments/updatebankaccountmetadatarequest.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `bankAccountId`                                                                                               | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The bank account ID.                                                                                          | XXX                                                                                                           |