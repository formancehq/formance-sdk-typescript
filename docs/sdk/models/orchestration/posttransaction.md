# PostTransaction

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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                        | Record<string, *string*>                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | {<br/>"admin": "true"<br/>}                                                                       |
| `postings`                                                                                        | [orchestration.Posting](../../../sdk/models/orchestration/posting.md)[]                           | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `reference`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | ref:001                                                                                           |
| `script`                                                                                          | [orchestration.PostTransactionScript](../../../sdk/models/orchestration/posttransactionscript.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |
| `timestamp`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |