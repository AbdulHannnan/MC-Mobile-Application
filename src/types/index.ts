// src/types — shared, app-wide TypeScript types.
//
// Put types that are used across multiple features here (domain entities like
// User, Service, Booking come in Module 17). Types that only matter to a single
// component or feature should live next to that code instead — keep this folder
// for the truly shared vocabulary of the app.
//
// A tiny placeholder type is included so the folder has real content and so you
// can see the intended style (named exports, no default export for types).

/** A value that may not be present yet — handy across the codebase. */
export type Maybe<T> = T | null | undefined;

/** Standard shape for an async operation's status in UI code. */
export type LoadState = 'idle' | 'loading' | 'success' | 'error';
