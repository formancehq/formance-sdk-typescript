# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldResponse = {
  data: {
    description: "Down-sized encompassing data-warehouse",
    id: "f5e2c070-cf0e-4c5e-9461-a07ad2cb8919",
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