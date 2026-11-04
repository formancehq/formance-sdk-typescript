# PostTransaction

A transaction to write to a ledger

## Example Usage

```typescript
import { PostTransaction } from "@formance/formance-sdk/sdk/models/orchestration";

let value: PostTransaction = {
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
    vars: {
      "user": "users:042",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                                   | Record<string, *string*>                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | Arbitrary key/value pairs attached to the resource                                                                                                                           | {<br/>"admin": "true"<br/>}                                                                                                                                                  |
| `postings`                                                                                                                                                                   | [orchestration.Posting](../../../sdk/models/orchestration/posting.md)[]                                                                                                      | :heavy_minus_sign:                                                                                                                                                           | Fund movements to apply. Mutually exclusive with script                                                                                                                      |                                                                                                                                                                              |
| `reference`                                                                                                                                                                  | *string*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                           | Optional caller-supplied identifier, unique within the ledger, used to deduplicate transactions                                                                              | ref:001                                                                                                                                                                      |
| `script`                                                                                                                                                                     | [orchestration.PostTransactionScript](../../../sdk/models/orchestration/posttransactionscript.md)                                                                            | :heavy_minus_sign:                                                                                                                                                           | A Numscript program executed to produce the postings. Mutually exclusive with postings                                                                                       |                                                                                                                                                                              |
| `timestamp`                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                | :heavy_minus_sign:                                                                                                                                                           | The transaction time to record, letting you backdate or postdate the transaction. See [bi-temporality](https://docs.formance.com/modules/ledger/working-with/bi-temporality) |                                                                                                                                                                              |