# Playwright Webkit Linux broken timer

## How to repoduce:
1. yarn
2. yarn dev
3. yarn playwright test --retries=0 --project=webkit

## Expected result:
Test passes and wall clock time for 1 second timeout is around 1 second

## Actual result:
Test might be fail because `expect` timeouted and on-page timer for 1 second timeout is vary in wall clock time from 1 second to even 5 seconds
