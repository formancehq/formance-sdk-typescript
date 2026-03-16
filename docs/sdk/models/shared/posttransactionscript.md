# PostTransactionScript

## Example Usage

```typescript
import { PostTransactionScript } from "@formance/formance-sdk/sdk/models/shared";

let value: PostTransactionScript = {
  plain:
    "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
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