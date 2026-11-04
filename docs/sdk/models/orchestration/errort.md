# ErrorT

General error

## Example Usage

```typescript
import { ErrorT } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ErrorT = {
  errorCode: "VALIDATION",
  errorMessage: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `errorCode`                                                                         | [orchestration.ErrorErrorCode](../../../sdk/models/orchestration/errorerrorcode.md) | :heavy_check_mark:                                                                  | Machine-readable error code identifying the failure                                 |
| `errorMessage`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | Human-readable description of the error                                             |