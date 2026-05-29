# V2BaseBulkElement

## Example Usage

```typescript
import { V2BaseBulkElement } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BaseBulkElement = {
  v2PostTransaction: {
    v2Metadata: {
      "admin": "true",
    },
    accountMetadata: {
      "key": {
        "admin": "true",
      },
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
      template: "CUSTOMER_DEPOSIT",
      vars: {
        "user": "users:042",
      },
    },
  },
  action: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `v2PostTransaction`                                                         | [ledger.V2PostTransaction](../../../sdk/models/ledger/v2posttransaction.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `action`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `ik`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |