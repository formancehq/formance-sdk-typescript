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

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `lastDigits`             | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |