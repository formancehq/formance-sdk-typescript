# SuspensionSource

## Example Usage

```typescript
import { SuspensionSource } from "@formance/formance-sdk/sdk/models/connectivity";

let value: SuspensionSource = {
  name: "<value>",
  source: "request",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | Logical instance or policy name contributing to suspension.       |
| `source`                                                          | [connectivity.Source](../../../sdk/models/connectivity/source.md) | :heavy_check_mark:                                                | N/A                                                               |