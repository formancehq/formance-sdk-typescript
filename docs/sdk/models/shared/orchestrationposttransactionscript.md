# OrchestrationPostTransactionScript

## Example Usage

```typescript
import { OrchestrationPostTransactionScript } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationPostTransactionScript = {
  plain: "vars {
account $user
}
send [COIN 10] (
	source = @world
	destination = $user
)
",
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