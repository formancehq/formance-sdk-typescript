# V2ListExportersResponseBody

Exporters list

## Example Usage

```typescript
import { V2ListExportersResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListExportersResponseBody = {
  cursor: {
    cursor: {
      data: [
        {
          config: {
            "key": "<value>",
            "key1": "<value>",
          },
          createdAt: new Date("2024-06-12T00:54:54.124Z"),
          driver: "<value>",
          id: "<id>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [operations.V2ListExportersCursor1](../../../sdk/models/operations/v2listexporterscursor1.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |