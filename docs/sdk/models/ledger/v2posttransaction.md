# V2PostTransaction

## Example Usage

```typescript
import { V2PostTransaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2PostTransaction = {
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
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runtime`                                                                                                                                              | [ledger.Runtime](../../../sdk/models/ledger/runtime.md)                                                                                                | :heavy_minus_sign:                                                                                                                                     | The numscript runtime used to execute the script. Uses "machine" by default, unless the "--experimental-numscript-interpreter" feature flag is passed. |                                                                                                                                                        |
| `v2Metadata`                                                                                                                                           | Record<string, *string*>                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    | {<br/>"admin": "true"<br/>}                                                                                                                            |
| `accountMetadata`                                                                                                                                      | Record<string, Record<string, *string*>>                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `force`                                                                                                                                                | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `postings`                                                                                                                                             | [ledger.V2Posting](../../../sdk/models/ledger/v2posting.md)[]                                                                                          | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `reference`                                                                                                                                            | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    | ref:001                                                                                                                                                |
| `script`                                                                                                                                               | [ledger.V2PostTransactionScript](../../../sdk/models/ledger/v2posttransactionscript.md)                                                                | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `timestamp`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                          | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |