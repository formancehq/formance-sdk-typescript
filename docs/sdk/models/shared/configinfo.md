# ConfigInfo

## Example Usage

```typescript
import { ConfigInfo } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigInfo = {
  config: {
    storage: {
      driver: "<value>",
      ledgers: [
        "<value>",
      ],
    },
  },
  server: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `config`                                              | [shared.Config](../../../sdk/models/shared/config.md) | :heavy_check_mark:                                    | N/A                                                   |
| `server`                                              | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `version`                                             | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |