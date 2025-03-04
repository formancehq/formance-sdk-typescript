# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldResponse = {
  data: {
    description: "scuttle amongst repeatedly motor though wearily empty",
    id: "66c6cc67-803d-4c1a-9082-d91aeb1a9ac4",
    metadata: {
      "key": "<value>",
    },
    originalAmount: BigInt("100"),
    remaining: BigInt("10"),
    walletID: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.ExpandedDebitHold](../../../sdk/models/shared/expandeddebithold.md) | :heavy_check_mark:                                                          | N/A                                                                         |