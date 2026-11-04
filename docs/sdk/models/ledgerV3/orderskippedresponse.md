# OrderSkippedResponse

Shape returned in the bulk result's `data` field when a bulk entry
opted into `skippableReasons` and the FSM matched one of the
listed reasons (no state mutation occurred). `skipped` is always
`true` on this shape — branch on it to distinguish from the
normal Transaction data.


## Example Usage

```typescript
import { OrderSkippedResponse } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: OrderSkippedResponse = {
  code: "<value>",
  reason: "<value>",
  skipped: false,
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Stable subcode for the skipped failure.                                                                                                                 |
| `facts`                                                                                                                                                 | Record<string, *string*>                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Validated, reason-specific correlators. For<br/>`TRANSACTION_REFERENCE_CONFLICT`, contains<br/>`reference` and `existingTransactionId`.<br/>            |
| `reason`                                                                                                                                                | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Typed reason that matched the skip (e.g. `TRANSACTION_REFERENCE_CONFLICT`). Same identifier the gRPC ErrorInfo.reason and the REST error responses use. |
| `skipped`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_check_mark:                                                                                                                                      | Always true on this shape.                                                                                                                              |