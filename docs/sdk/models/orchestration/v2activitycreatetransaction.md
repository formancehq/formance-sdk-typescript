# V2ActivityCreateTransaction

## Example Usage

```typescript
import { V2ActivityCreateTransaction } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityCreateTransaction = {
  v2PostTransaction: {
    v2Metadata: {
      "admin": "true",
    },
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    script: {
      plain:
        "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
      vars: {
        "user": "users:042",
      },
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `v2PostTransaction`                                                                       | [orchestration.V2PostTransaction](../../../sdk/models/orchestration/v2posttransaction.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `ledger`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |