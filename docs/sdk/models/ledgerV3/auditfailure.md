# AuditFailure

Stable reason, subcode, and facts for a failed proposal. Presentation text is rendered when read and is not stored in the audit chain.

## Example Usage

```typescript
import { AuditFailure } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: AuditFailure = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `code`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Stable failure subcode                                               |
| `facts`                                                              | Record<string, *string*>                                             | :heavy_minus_sign:                                                   | Validated facts used to render the failure                           |
| `reason`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Typed error reason identifier (e.g. ERROR_REASON_INSUFFICIENT_FUNDS) |