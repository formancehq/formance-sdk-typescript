# Account

## Example Usage

```typescript
import { Account } from "@formance/formance-sdk/sdk/models/ledger";

let value: Account = {
  address: "users:001",
  metadata: {
    "admin": true,
    "a": {
      "nested": {
        "key": "value",
      },
    },
  },
  type: "virtual",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `address`                                                               | *string*                                                                | :heavy_check_mark:                                                      | The account address, a colon-separated segmented path such as users:001 | users:001                                                               |
| `metadata`                                                              | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Arbitrary key/value pairs attached to the account                       | {<br/>"admin": true,<br/>"a": {<br/>"nested": {<br/>"key": "value"<br/>}<br/>}<br/>} |
| `type`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | Free-form classification of the account                                 | virtual                                                                 |