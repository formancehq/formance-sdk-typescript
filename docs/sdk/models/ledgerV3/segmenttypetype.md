# SegmentTypeType

regex: custom regular expression (requires `regex`).
uuid: RFC 4122 UUID format.
uint64: decimal uint64.
bytes: hex-encoded bytes (even length).


## Example Usage

```typescript
import { SegmentTypeType } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: SegmentTypeType = "uuid";
```

## Values

```typescript
"regex" | "uuid" | "uint64" | "bytes"
```