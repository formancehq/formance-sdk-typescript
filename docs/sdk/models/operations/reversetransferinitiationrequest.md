# ReverseTransferInitiationRequest

## Example Usage

```typescript
import { ReverseTransferInitiationRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ReverseTransferInitiationRequest = {
  reverseTransferInitiationRequest: {
    amount: BigInt("680056"),
    asset: "USD",
    description: "Monitored heuristic solution",
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