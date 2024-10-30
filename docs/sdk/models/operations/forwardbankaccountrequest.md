# ForwardBankAccountRequest

## Example Usage

```typescript
import { ForwardBankAccountRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ForwardBankAccountRequest = {
  forwardBankAccountRequest: {
    connectorID: "<id>",
  },
  bankAccountId: "XXX",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `forwardBankAccountRequest`                                                                 | [shared.ForwardBankAccountRequest](../../../sdk/models/shared/forwardbankaccountrequest.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |                                                                                             |
| `bankAccountId`                                                                             | *string*                                                                                    | :heavy_check_mark:                                                                          | The bank account ID.                                                                        | XXX                                                                                         |