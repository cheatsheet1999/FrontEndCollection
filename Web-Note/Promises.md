**A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection**

## How Promises Work
**A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:**
- Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
- Rejected: onRejected() will be called (e.g., reject() was called)
- Pending: not yet fulfilled or rejected

**Promises following the spec must follow a specific set of rules:**
- A promise or “thenable” is an object that supplies a standard-compliant .then() method.
- A pending promise may transition into a fulfilled or rejected state.
- A fulfilled or rejected promise is settled, and must not transition into any other state.
- Once a promise is settled, it must have a value (which may be undefined). That value must not change.
