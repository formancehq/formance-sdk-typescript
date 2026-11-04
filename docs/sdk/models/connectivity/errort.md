# ErrorT

Request or server error. The HTTP status and code identify the failure.

## Example Usage

```typescript
import { ErrorT } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ErrorT = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `code`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Machine-readable error code (e.g. `not_found`, `unauthorized`, `connector_missing`) |
| `details`                                                                           | Record<string, *any*>                                                               | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `message`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |