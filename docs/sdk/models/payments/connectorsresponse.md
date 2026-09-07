# ConnectorsResponse

OK

## Example Usage

```typescript
import { ConnectorsResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorsResponse = {
  data: [
    {
      connectorID: "<id>",
      name: "<value>",
      provider: "WISE",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [payments.ConnectorsResponseData](../../../sdk/models/payments/connectorsresponsedata.md)[] | :heavy_check_mark:                                                                          | The connectors installed on this stack                                                      |