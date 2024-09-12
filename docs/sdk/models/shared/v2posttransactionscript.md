# V2PostTransactionScript

## Example Usage

```typescript
import { V2PostTransactionScript } from "@formance/formance-sdk/sdk/models/shared";

let value: V2PostTransactionScript = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `plain`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | vars {<br/>account $user<br/>}<br/>send [COIN 10] (<br/>	source = @world<br/>	destination = $user<br/>)<br/> |
| `vars`                                                                           | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              | {<br/>"user": "users:042"<br/>}                                                  |