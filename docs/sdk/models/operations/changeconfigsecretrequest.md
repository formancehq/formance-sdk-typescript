# ChangeConfigSecretRequest

## Example Usage

```typescript
import { ChangeConfigSecretRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ChangeConfigSecretRequest = {
    configChangeSecret: {
        secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    },
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `configChangeSecret`                                                          | [shared.ConfigChangeSecret](../../../sdk/models/shared/configchangesecret.md) | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Config ID                                                                     | 4997257d-dfb6-445b-929c-cbe2ab182818                                          |