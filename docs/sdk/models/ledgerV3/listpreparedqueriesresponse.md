# ListPreparedQueriesResponse

## Example Usage

```typescript
import { ListPreparedQueriesResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ListPreparedQueriesResponse = {
  data: [
    {
      name: "<value>",
      target: "LOGS",
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [ledgerV3.PreparedQuery](../../../sdk/models/ledgerV3/preparedquery.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |