# Script

## Example Usage

```typescript
import { Script } from "@formance/formance-sdk/sdk/models/shared";

let value: Script = {
  plain: "vars {
account $user
}
send [COIN 10] (
	source = @world
	destination = $user
)
",
  reference: "order_1234",
  vars: {
    "user": "users:042",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `metadata`                                                                       | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `plain`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | vars {<br/>account $user<br/>}<br/>send [COIN 10] (<br/>	source = @world<br/>	destination = $user<br/>)<br/> |
| `reference`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Reference to attach to the generated transaction                                 | order_1234                                                                       |
| `vars`                                                                           | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              | {<br/>"user": "users:042"<br/>}                                                  |