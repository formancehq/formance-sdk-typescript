# V2UpdateExporterRequest

## Example Usage

```typescript
import { V2UpdateExporterRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2UpdateExporterRequest = {
  v2CreateExporterRequest: {
    config: {
      "key": "<value>",
    },
    driver: "<value>",
  },
  exporterID: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `v2CreateExporterRequest`                                                               | [shared.V2CreateExporterRequest](../../../sdk/models/shared/v2createexporterrequest.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `exporterID`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | The exporter id                                                                         |