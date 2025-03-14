# ConnectorConfigResponse

OK

## Example Usage

```typescript
import { ConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorConfigResponse = {
  data: {
    accessKey: "XXX",
    baseUrl: "https://api.atlar.com",
    name: "My Atlar Account",
    pageSize: 25,
    pollingPeriod: "120s",
    secret: "XXX",
    transferInitiationStatusPollingPeriod: "120s",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `data`                   | *shared.ConnectorConfig* | :heavy_check_mark:       | N/A                      |