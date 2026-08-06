# AlertsCursorResponse

OK

## Example Usage

```typescript
import { AlertsCursorResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: AlertsCursorResponse = {
  cursor: {
    data: [
      {
        ack: {
          at: new Date("2024-08-13T19:29:24.261Z"),
          by: "ops@buildr.com",
        },
        createdAt: new Date("2024-01-01T12:55:14.883Z"),
        fingerprint: "asset:USD/2",
        firstSeenAt: new Date("2024-01-20T19:25:37.783Z"),
        id: "a154f8a9-9bcb-463e-ad4c-d7a89674ec3a",
        lastEvaluationID: "49c6a128-3999-40d7-80ec-1e4adf945b73",
        lastSeenAt: new Date("2024-11-10T15:46:40.238Z"),
        occurrenceCount: 122249,
        periodID: "2026-03",
        ruleID: "9a793457-df0a-4f67-ad38-b7ab9ecbee52",
        severity: "info",
        snooze: {
          at: new Date("2024-06-04T06:33:19.154Z"),
          by: "ops@buildr.com",
          until: new Date("2026-05-02T11:42:36.957Z"),
        },
        status: "ACKNOWLEDGED",
        updatedAt: new Date("2026-09-07T20:03:22.662Z"),
      },
    ],
    hasMore: false,
    pageSize: 187290,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                      | [reconciliation.AlertsCursorResponseCursor](../../../sdk/models/reconciliation/alertscursorresponsecursor.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |