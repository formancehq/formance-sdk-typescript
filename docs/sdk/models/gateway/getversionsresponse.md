# GetVersionsResponse

## Example Usage

```typescript
import { GetVersionsResponse } from "@formance/formance-sdk/sdk/models/gateway";

let value: GetVersionsResponse = {
  env: "<value>",
  region: "<value>",
  versions: [
    {
      health: true,
      name: "<value>",
      version: "<value>",
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `env`                                                       | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `region`                                                    | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `versions`                                                  | [gateway.Version](../../../sdk/models/gateway/version.md)[] | :heavy_check_mark:                                          | N/A                                                         |