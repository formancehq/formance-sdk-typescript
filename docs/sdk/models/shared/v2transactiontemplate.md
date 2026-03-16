# V2TransactionTemplate

## Example Usage

```typescript
import { V2TransactionTemplate } from "@formance/formance-sdk/sdk/models/shared";

let value: V2TransactionTemplate = {
  script: "<value>",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                                                          | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `runtime`                                                                                                                                              | [shared.Runtime](../../../sdk/models/shared/runtime.md)                                                                                                | :heavy_minus_sign:                                                                                                                                     | The numscript runtime used to execute the script. Uses "machine" by default, unless the "--experimental-numscript-interpreter" feature flag is passed. |
| `script`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |