# ConfigInfoResponse

## Example Usage

```typescript
import { ConfigInfoResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigInfoResponse = {
    data: {
        config: {
            storage: {
                driver: "<value>",
                ledgers: ["<value>"],
            },
        },
        server: "<value>",
        version: "<value>",
    },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.ConfigInfo](../../../sdk/models/shared/configinfo.md) | :heavy_check_mark:                                            | N/A                                                           |