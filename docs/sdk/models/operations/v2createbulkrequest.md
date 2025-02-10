# V2CreateBulkRequest

## Example Usage

```typescript
import { V2CreateBulkRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateBulkRequest = {
  requestBody: [
    {
      action: "<value>",
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
          plain: "vars {\n"
            + "account $user\n"
            + "}\n"
            + "send [COIN 10] (\n"
            + "	source = @world\n"
            + "	destination = $user\n"
            + ")\n"
            + "",
          vars: {
            "user": "users:042",
          },
        },
      },
    },
  ],
  atomic: true,
  continueOnFailure: true,
  ledger: "ledger001",
  parallel: true,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `requestBody`                     | *shared.V2BulkElement*[]          | :heavy_minus_sign:                | N/A                               |                                   |
| `atomic`                          | *boolean*                         | :heavy_minus_sign:                | Make bulk atomic                  | true                              |
| `continueOnFailure`               | *boolean*                         | :heavy_minus_sign:                | Continue on failure               | true                              |
| `ledger`                          | *string*                          | :heavy_check_mark:                | Name of the ledger.               | ledger001                         |
| `parallel`                        | *boolean*                         | :heavy_minus_sign:                | Process bulk elements in parallel | true                              |