# V2ListExportersCursor1

## Example Usage

```typescript
import { V2ListExportersCursor1 } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListExportersCursor1 = {
  cursor: {
    data: [
      {
        config: {
          "key": "<value>",
          "key1": "<value>",
        },
        createdAt: new Date("2023-06-13T00:54:54.124Z"),
        driver: "<value>",
        id: "<id>",
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [operations.V2ListExportersCursor2](../../../sdk/models/operations/v2listexporterscursor2.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [shared.V2Exporter](../../../sdk/models/shared/v2exporter.md)[]                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |