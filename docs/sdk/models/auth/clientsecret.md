# ClientSecret

## Example Usage

```typescript
import { ClientSecret } from "@formance/formance-sdk/sdk/models/auth";

let value: ClientSecret = {
  id: "<id>",
  lastDigits: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier of the secret                                                                |
| `lastDigits`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | Last digits of the secret. The full plaintext is hidden, and only the last digits are exposed. |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | Arbitrary key/value pairs attached to the resource                                             |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Human-readable name identifying the secret                                                     |