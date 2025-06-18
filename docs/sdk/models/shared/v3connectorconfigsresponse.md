# V3ConnectorConfigsResponse

## Example Usage

```typescript
import { V3ConnectorConfigsResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorConfigsResponse = {
  data: {
    "key": {},
    "key1": {
      "key": {
        dataType: "enum",
        required: false,
      },
    },
    "key2": {
      "key": {
        dataType: "enum",
        required: false,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                | Record<string, Record<string, [shared.V3ConnectorConfigsResponseData](../../../sdk/models/shared/v3connectorconfigsresponsedata.md)>> | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |