# V2Error

General error

## Example Usage

```typescript
import { V2Error } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Error = {
  errorCode: "NOT_FOUND",
  errorMessage: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `errorCode`                                                                             | [orchestration.V2ErrorErrorCode](../../../sdk/models/orchestration/v2errorerrorcode.md) | :heavy_check_mark:                                                                      | Machine-readable error code identifying the failure                                     |
| `errorMessage`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | Human-readable description of the error                                                 |