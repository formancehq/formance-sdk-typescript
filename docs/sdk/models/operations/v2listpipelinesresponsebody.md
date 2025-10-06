# V2ListPipelinesResponseBody

Pipelines list

## Example Usage

```typescript
import { V2ListPipelinesResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ListPipelinesResponseBody = {
  cursor: {
    cursor: {
      data: [
        {
          createdAt: new Date("2023-07-14T16:04:01.498Z"),
          exporterID: "<id>",
          id: "<id>",
          ledger: "<value>",
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
| `cursor`                                                                                      | [operations.V2ListPipelinesCursor1](../../../sdk/models/operations/v2listpipelinescursor1.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |