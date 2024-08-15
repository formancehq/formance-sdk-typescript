# ClientSecret

## Example Usage

```typescript
import { ClientSecret } from "@formance/formance-sdk/sdk/models/shared";

let value: ClientSecret = {
    id: "<id>",
    lastDigits: "<value>",
    name: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `lastDigits`          | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |