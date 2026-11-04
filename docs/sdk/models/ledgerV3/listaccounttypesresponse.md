# ListAccountTypesResponse

## Example Usage

```typescript
import { ListAccountTypesResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: ListAccountTypesResponse = {
  data: {
    types: [
      {
        name: "<value>",
        pattern: "<value>",
        persistence: "TRANSIENT",
        segmentTypes: {
          "key": {
            regex: "[A-Z]{2}[0-9]{14}",
            type: "uint64",
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [ledgerV3.ListAccountTypesResponseData](../../../sdk/models/ledgerV3/listaccounttypesresponsedata.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |