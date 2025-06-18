# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldResponse = {
  data: {
    asset: "<value>",
    description: "noisily since whispered helpfully blah implode",
    id: "3e139af1-c62d-4949-926a-783670366ad9",
    metadata: {
      "key": "<value>",
    },
    originalAmount: 100n,
    remaining: 10n,
    walletID: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.ExpandedDebitHold](../../../sdk/models/shared/expandeddebithold.md) | :heavy_check_mark:                                                          | N/A                                                                         |