# ConnectionCursor

## Example Usage

```typescript
import { ConnectionCursor } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectionCursor = {
  cursor: {
    data: [
      {
        configuration: {},
        name: "<value>",
      },
    ],
    hasMore: true,
    pageSize: 689687,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | [connectivity.ConnectionCursorCursor](../../../sdk/models/connectivity/connectioncursorcursor.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |