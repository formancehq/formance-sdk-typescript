# ConfigChangeSecret

## Example Usage

```typescript
import { ConfigChangeSecret } from "@formance/formance-sdk/sdk/models/webhooks";

let value: ConfigChangeSecret = {
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `secret`                                                  | *string*                                                  | :heavy_check_mark:                                        | The new signing secret, 24 random bytes encoded as base64 | V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3                          |