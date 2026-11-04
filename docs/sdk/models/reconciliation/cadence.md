# ~~Cadence~~

Deprecated alias of `periodType`. Same members. Use `periodType`; this is
removed at the next API major.

Kept as its own component so regenerated SDKs keep emitting the
`Cadence` type and its constants — dropping it would delete
`CadenceMonthly` and friends from generated clients and break code that
compiles today, even though the wire contract stays compatible.

On requests either key is accepted. If both carry a value and the values
differ the request is rejected with 400 rather than one being chosen
silently; an empty `cadence` counts as unset rather than as a
conflicting value.

On responses the server always emits both keys, mirroring, but neither
is listed in the `Rule` required set. That understates the guarantee on
purpose. A required property with no schema default generates a value
type in Go, which would turn the published `Rule.Cadence *Cadence` and
`GetCadence() *Cadence` into non-pointers and break existing consumers;
optional-without-default reproduces the published pointer signatures.
The default cannot come back, because generators materialize it into
request bodies and that collides with this alias. Both become required
again at the next API major, when `cadence` goes.

Servers before 2.5.0 do not know `periodType` and ignore it, falling
back to `continuous`. Normally that cannot bite you: `periodType`
reaches clients via an SDK regenerated from this spec, which only exists
once 2.5.0 is released. If you need determinism while a fleet is
mid-upgrade, send both keys with equal values — accepted on every
version.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { Cadence } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: Cadence = "daily";
```

## Values

```typescript
"continuous" | "daily" | "weekly" | "monthly"
```