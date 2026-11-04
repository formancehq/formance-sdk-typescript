# PatchConnectionRequest

## Example Usage

```typescript
import { PatchConnectionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: PatchConnectionRequest = {
  connectionPatch: {},
  name: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `connectionPatch`                                                                   | [connectivity.ConnectionPatch](../../../sdk/models/connectivity/connectionpatch.md) | :heavy_check_mark:                                                                  | Encoded request body must not exceed 1 MiB (1,048,576 bytes).                       |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Instance name within this tenant                                                    |