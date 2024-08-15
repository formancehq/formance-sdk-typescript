# ActivityCreateTransaction

## Example Usage

```typescript
import { ActivityCreateTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: ActivityCreateTransaction = {
  data: {
    metadata: {
      "admin": "true",
    },
    postings: [
      {
        amount: BigInt("100"),
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    script: {
      plain: "vars {
    account $user
    }
    send [COIN 10] (
    	source = @world
    	destination = $user
    )
    ",
      vars: {
        "user": "users:042",
      },
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [shared.OrchestrationPostTransaction](../../../sdk/models/shared/orchestrationposttransaction.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `ledger`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |