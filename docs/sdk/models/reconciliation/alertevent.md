# AlertEvent

One row of the alert's append-only event log. Captures every
evaluation that touched the alert plus every manual transition
(ack / resolve / accept / snooze / unsnooze). `prevStatus` is null
only for the inaugural event of an alert. `isReopen` is a derived
predicate — true when a FAIL event lands on a previously-RESOLVED alert.
`notify` is the notification decision recorded for the row: false marks
a transition kept for audit but deliberately not published (a repeated
identical fail, or a fail muted by an active snooze).


## Example Usage

```typescript
import { AlertEvent } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: AlertEvent = {
  alertID: "20d0b4ce-09d6-4bd4-a174-03e57b3bd4ef",
  at: new Date("2026-02-13T03:44:16.079Z"),
  id: "03a54f4b-0627-4e3b-a4c9-1d8c6a78b185",
  isReopen: true,
  newStatus: "ACKNOWLEDGED",
  notify: false,
  type: "resolve",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `alertID`                                                                                                                     | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `at`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `evaluationID`                                                                                                                | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `isReopen`                                                                                                                    | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `newStatus`                                                                                                                   | [reconciliation.NewStatus](../../../sdk/models/reconciliation/newstatus.md)                                                   | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `notify`                                                                                                                      | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether this transition was published to the message bus. false = recorded for audit but suppressed.                          |
| `payload`                                                                                                                     | Record<string, *any*>                                                                                                         | :heavy_minus_sign:                                                                                                            | Event-type-specific payload (evidence for fail, resolution for resolve/accept, ack object for ack, snooze object for snooze). |
| `prevStatus`                                                                                                                  | [reconciliation.PrevStatus](../../../sdk/models/reconciliation/prevstatus.md)                                                 | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `type`                                                                                                                        | [reconciliation.Type](../../../sdk/models/reconciliation/type.md)                                                             | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |