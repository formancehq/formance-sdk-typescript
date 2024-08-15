# V2ListWalletsResponse

## Example Usage

```typescript
import { V2ListWalletsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponse = {
    cursor: {
        data: [
            {
                createdAt: new Date("2024-03-01T15:52:50.983Z"),
                id: "faad4f9e-fc1b-4451-ac10-32648dc2f615",
                ledger: "<value>",
                metadata: {
                    key: "<value>",
                },
                name: "<value>",
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

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `cursor`                                                                                        | [shared.V2ListWalletsResponseCursor](../../../sdk/models/shared/v2listwalletsresponsecursor.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |