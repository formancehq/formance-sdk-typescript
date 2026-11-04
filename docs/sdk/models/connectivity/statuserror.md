# StatusError

Fixed sanitized failure diagnostic. Unknown or stale failure provenance is failure_unknown. Ingestion failures with known provenance are reported under ingestion instead.

## Example Usage

```typescript
import { StatusError } from "@formance/formance-sdk/sdk/models/connectivity";

let value: StatusError = {
  code: "failure_unknown",
  message: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `code`                                                        | [connectivity.Code](../../../sdk/models/connectivity/code.md) | :heavy_check_mark:                                            | N/A                                                           |
| `message`                                                     | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |