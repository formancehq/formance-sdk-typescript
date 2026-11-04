# ReplaceConnectionRequest

## Example Usage

```typescript
import { ReplaceConnectionRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ReplaceConnectionRequest = {
  connectionUpdate: {
    configuration: {},
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `connectionUpdate`                                                                    | [connectivity.ConnectionUpdate](../../../sdk/models/connectivity/connectionupdate.md) | :heavy_check_mark:                                                                    | Encoded request body must not exceed 1 MiB (1,048,576 bytes).                         |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Instance name within this tenant                                                      |