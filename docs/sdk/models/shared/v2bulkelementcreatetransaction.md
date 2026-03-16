# V2BulkElementCreateTransaction

## Example Usage

```typescript
import { V2BulkElementCreateTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementCreateTransaction = {
  action: "CREATE_TRANSACTION",
  data: {
    accountMetadata: {
      "key": {
        "admin": "true",
      },
    },
    metadata: {
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
      template: "CUSTOMER_DEPOSIT",
      vars: {
        "user": "users:042",
      },
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `action`                                                                    | *"CREATE_TRANSACTION"*                                                      | :heavy_check_mark:                                                          | N/A                                                                         |
| `data`                                                                      | [shared.V2PostTransaction](../../../sdk/models/shared/v2posttransaction.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `ik`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |