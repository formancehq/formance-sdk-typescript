# ReverseTransferInitiationRequest

## Example Usage

```typescript
import { ReverseTransferInitiationRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ReverseTransferInitiationRequest = {
  reverseTransferInitiationRequest: {
    amount: BigInt("405036"),
    asset: "USD",
    description: "overheard or astride baseboard councilman ambitious",
    metadata: {
      "key": "<value>",
    },
    reference: "XXX",
  },
  transferId: "XXX",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `reverseTransferInitiationRequest`                                                                        | [shared.ReverseTransferInitiationRequest](../../../sdk/models/shared/reversetransferinitiationrequest.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `transferId`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The transfer ID.                                                                                          | XXX                                                                                                       |