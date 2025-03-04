# V2ListRunsResponse

## Example Usage

```typescript
import { V2ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListRunsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2025-01-04T13:57:54.417Z"),
        id: "<id>",
        terminated: false,
        updatedAt: new Date("2024-05-31T22:39:05.751Z"),
        workflowID: "<id>",
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

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cursor`                                                                                  | [shared.V2ListRunsResponseCursor](../../../sdk/models/shared/v2listrunsresponsecursor.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |