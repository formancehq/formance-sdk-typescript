# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldResponse = {
  data: {
    description: "Inverse 5th generation infrastructure",
    id: "f3c93c73-b9da-43f2-8eda-7e23f2257411",
    metadata: {
      "key": "<value>",
    },
    originalAmount: BigInt("100"),
    remaining: BigInt("10"),
    walletID: "<value>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.ExpandedDebitHold](../../../sdk/models/shared/expandeddebithold.md) | :heavy_check_mark:                                                          | N/A                                                                         |