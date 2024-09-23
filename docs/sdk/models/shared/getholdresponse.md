# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldResponse = {
  data: {
    description: "Reduced tertiary frame",
    id: "9b0c6a7b-b3ad-43ca-9f42-44cba3df8a84",
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