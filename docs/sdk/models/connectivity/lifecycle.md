# Lifecycle

Last recorded service outcome. completed means successful bounded completion. unknown means the recorded outcome is unrecognized, not healthy.

## Example Usage

```typescript
import { Lifecycle } from "@formance/formance-sdk/sdk/models/connectivity";

let value: Lifecycle = "active";
```

## Values

```typescript
"pending" | "active" | "suspended" | "completed" | "failed" | "unknown"
```