# ConnectionPatch

JSON merge patch (RFC 7396) over tenant `configuration` only. Omitted fields and
map entries are preserved; `null` deletes mutable fields. Connector and ledger
are not PATCH fields: any presence, including unchanged values and null,
returns `400 unsupported_field`. A literal value replaces
its stored source. Storage references and metadata are rejected.


## Example Usage

```typescript
import { ConnectionPatch } from "@formance/formance-sdk/sdk/models/connectivity";

let value: ConnectionPatch = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `configuration`                                                                                               | [connectivity.ConnectionPatchConfiguration](../../../sdk/models/connectivity/connectionpatchconfiguration.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |