# V2LogsCursorResponse

## Example Usage

```typescript
import { V2LogsCursorResponse, V2LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2LogsCursorResponse = {
    cursor: {
        data: [
            {
                data: {
                    key: "<value>",
                },
                date: new Date("2022-05-22T20:03:43.668Z"),
                hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
                id: BigInt("1234"),
                type: V2LogType.RevertedTransaction,
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
| `cursor`                                                                                      | [shared.V2LogsCursorResponseCursor](../../../sdk/models/shared/v2logscursorresponsecursor.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |