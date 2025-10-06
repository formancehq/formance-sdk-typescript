# V2PostTransaction

## Example Usage

```typescript
import { V2PostTransaction } from "@formance/formance-sdk/sdk/models/shared";

let value: V2PostTransaction = {
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
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountMetadata`                                                                                                                                      | Record<string, Record<string, *string*>>                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `force`                                                                                                                                                | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `metadata`                                                                                                                                             | Record<string, *string*>                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    | {<br/>"admin": "true"<br/>}                                                                                                                            |
| `postings`                                                                                                                                             | [shared.V2Posting](../../../sdk/models/shared/v2posting.md)[]                                                                                          | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `reference`                                                                                                                                            | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    | ref:001                                                                                                                                                |
| `runtime`                                                                                                                                              | [shared.Runtime](../../../sdk/models/shared/runtime.md)                                                                                                | :heavy_minus_sign:                                                                                                                                     | The numscript runtime used to execute the script. Uses "machine" by default, unless the "--experimental-numscript-interpreter" feature flag is passed. |                                                                                                                                                        |
| `script`                                                                                                                                               | [shared.V2PostTransactionScript](../../../sdk/models/shared/v2posttransactionscript.md)                                                                | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |
| `timestamp`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                          | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |                                                                                                                                                        |