# CreateTransactionRequest

## Example Usage

```typescript
import { CreateTransactionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateTransactionRequest = {
    postTransaction: {
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
            plain:
                "vars {\n" +
                "account $user\n" +
                "}\n" +
                "send [COIN 10] (\n" +
                "	source = @world\n" +
                "	destination = $user\n" +
                ")\n" +
                "",
            vars: {
                user: "users:042",
            },
        },
    },
    ledger: "ledger001",
    preview: true,
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `postTransaction`                                                                                                                                                                      | [shared.PostTransaction](../../../sdk/models/shared/posttransaction.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                     | The request body must contain at least one of the following objects:<br/>  - `postings`: suitable for simple transactions<br/>  - `script`: enabling more complex transactions with Numscript<br/> |                                                                                                                                                                                        |
| `ledger`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Name of the ledger.                                                                                                                                                                    | ledger001                                                                                                                                                                              |
| `preview`                                                                                                                                                                              | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker.                                                                    | true                                                                                                                                                                                   |