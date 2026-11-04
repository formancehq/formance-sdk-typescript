# GetAuditEntryResponseBody

The audit entry

## Example Usage

```typescript
import { GetAuditEntryResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: GetAuditEntryResponseBody = {};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                        | [ledgerV3.AuditEntry](../../../sdk/models/ledgerV3/auditentry.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                            | A single audit trail entry for a proposal (success or failure). Exactly<br/>one of `success` / `failure` is set. `items` is populated only by the<br/>single-entry lookup, not by the list endpoint.<br/> |