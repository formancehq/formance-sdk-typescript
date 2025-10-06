# V2GetExporterStateResponseBody

Exporter information

## Example Usage

```typescript
import { V2GetExporterStateResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2GetExporterStateResponseBody = {
  data: {
    config: {
      "key": "<value>",
    },
    createdAt: new Date("2025-10-02T06:10:34.752Z"),
    driver: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V2Exporter](../../../sdk/models/shared/v2exporter.md) | :heavy_check_mark:                                            | N/A                                                           |