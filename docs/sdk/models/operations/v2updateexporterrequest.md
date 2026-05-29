# V2UpdateExporterRequest

## Example Usage

```typescript
import { V2UpdateExporterRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2UpdateExporterRequest = {
  v2ExporterConfiguration: {
    config: {
      "key": "<value>",
    },
    driver: "<value>",
  },
  exporterID: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `v2ExporterConfiguration`                                                                 | [ledger.V2ExporterConfiguration2](../../../sdk/models/ledger/v2exporterconfiguration2.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `exporterID`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | The exporter id                                                                           |