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
| `env`                                                       | *string*                                                    | :heavy_check_mark:                                          | Environment the stack is deployed in                        |
| `region`                                                    | *string*                                                    | :heavy_check_mark:                                          | Region the stack is deployed in                             |
| `versions`                                                  | [gateway.Version](../../../sdk/models/gateway/version.md)[] | :heavy_check_mark:                                          | Version and health of each component in the stack           |