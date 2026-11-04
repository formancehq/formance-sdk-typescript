# Version

## Example Usage

```typescript
import { Version } from "@formance/formance-sdk/sdk/models/gateway";

let value: Version = {
  health: true,
  name: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `health`                                          | *boolean*                                         | :heavy_check_mark:                                | Whether the component is reporting itself healthy |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | Name of the component                             |
| `version`                                         | *string*                                          | :heavy_check_mark:                                | Version of the component currently deployed       |