# V2PostTransactionScript

## Example Usage

```typescript
import { V2PostTransactionScript } from "@formance/formance-sdk/sdk/models/shared";

let value: V2PostTransactionScript = {
  plain:
    "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
  template: "CUSTOMER_DEPOSIT",
  vars: {
    "user": "users:042",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `plain`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | vars {<br/>account $user<br/>}<br/>send [COIN 10] (<br/>	source = @world<br/>	destination = $user<br/>)<br/> |
| `template`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | CUSTOMER_DEPOSIT                                                                 |
| `vars`                                                                           | Record<string, *string*>                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | {<br/>"user": "users:042"<br/>}                                                  |