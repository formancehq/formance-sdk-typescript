# GetHoldResponse

## Example Usage

```typescript
import { GetHoldResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldResponse = {
    data: {
        description: "Profound human-resource solution",
        id: "575f1400-e764-4ad7-b34e-c1b781b36a08",
        metadata: {
            key: "<value>",
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