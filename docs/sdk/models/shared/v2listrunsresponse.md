# V2ListRunsResponse

## Example Usage

```typescript
import { V2ListRunsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListRunsResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2023-07-29T17:17:11.069Z"),
        id: "<id>",
        terminated: false,
        updatedAt: new Date("2024-07-22T15:09:35.550Z"),
        workflowID: "<value>",
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