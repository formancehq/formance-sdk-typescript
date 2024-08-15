# Account

## Example Usage

```typescript
import { Account } from "@formance/formance-sdk/sdk/models/shared";

let value: Account = {
    address: "users:001",
    metadata: {
        admin: true,
        a: {
            nested: {
                key: "value",
            },
        },
    },
    type: "virtual",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `address`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | users:001                                                |
| `metadata`                                               | Record<string, *any*>                                    | :heavy_minus_sign:                                       | N/A                                                      | {<br/>"admin": true,<br/>"a": {<br/>"nested": {<br/>"key": "value"<br/>}<br/>}<br/>} |
| `type`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | virtual                                                  |