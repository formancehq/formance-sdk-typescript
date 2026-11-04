# Script

## Example Usage

```typescript
import { Script } from "@formance/formance-sdk/sdk/models/ledger";

let value: Script = {
  plain:
    "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
  reference: "order_1234",
  vars: {
    "user": "users:042",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `metadata`                                                                       | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | Arbitrary key/value pairs attached to the resource                               |                                                                                  |
| `plain`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | The Numscript program to execute                                                 | vars {<br/>account $user<br/>}<br/>send [COIN 10] (<br/>	source = @world<br/>	destination = $user<br/>)<br/> |
| `reference`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Reference to attach to the generated transaction                                 | order_1234                                                                       |
| `vars`                                                                           | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | Values bound to the script's declared variables, keyed by variable name          | {<br/>"user": "users:042"<br/>}                                                  |