# RunScriptRequest

## Example Usage

```typescript
import { RunScriptRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: RunScriptRequest = {
    script: {
        plain:
            "vars {\n" +
            "account $user\n" +
            "}\n" +
            "send [COIN 10] (\n" +
            "	source = @world\n" +
            "	destination = $user\n" +
            ")\n" +
            "",
        reference: "order_1234",
        vars: {
            user: "users:042",
        },
    },
    ledger: "ledger001",
    preview: true,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `script`                                                                                                            | [shared.Script](../../../sdk/models/shared/script.md)                                                               | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `ledger`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Name of the ledger.                                                                                                 | ledger001                                                                                                           |
| `preview`                                                                                                           | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker. | true                                                                                                                |