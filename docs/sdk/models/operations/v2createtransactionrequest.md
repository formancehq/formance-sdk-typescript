# V2CreateTransactionRequest

## Example Usage

```typescript
import { V2CreateTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2CreateTransactionRequest = {
  v2PostTransaction: {
    accountMetadata: {
      "key": {
        "admin": "true",
      },
      "key1": {
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
  dryRun: true,
  ledger: "ledger001",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                                                                       | *string*                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                     | Use an idempotency key                                                                                                                                                                 |                                                                                                                                                                                        |
| `v2PostTransaction`                                                                                                                                                                    | [shared.V2PostTransaction](../../../sdk/models/shared/v2posttransaction.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                                     | The request body must contain at least one of the following objects:<br/>  - `postings`: suitable for simple transactions<br/>  - `script`: enabling more complex transactions with Numscript<br/> |                                                                                                                                                                                        |
| `dryRun`                                                                                                                                                                               | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | Set the dryRun mode. dry run mode doesn't add the logs to the database or publish a message to the message broker.                                                                     | true                                                                                                                                                                                   |
| ~~`force`~~                                                                                                                                                                            | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Disable balance checks when passing postings          | true                                                                                                                                                                                   |
| `ledger`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Name of the ledger.                                                                                                                                                                    | ledger001                                                                                                                                                                              |