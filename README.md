# Playwright Webkit Linux broken timer

## How to repoduce:
1. `yarn`
2. `yarn dev --force`
3. `yarn playwright test --retries=0 --project=webkit`

## Expected result:
Prior to Playwright webkit build 1943:

Test passes and wall clock time cost for 1-second on-page timeout is around 1 second

Output of test result should look like this:
```
Running 1 test using 1 worker

     1 [webkit] › filter.spec.ts:3:1 › test filter
[1702206573648] On page reference one second tick: 1001
=====================================
[1702206574131] filterQuery changed to: name=foo
[1702206574131] Start on page reference timer
[1702206574649] On page reference one second tick: 1001
[1702206575132] On page reference timer 1000ms = 1001ms
[1702206575650] On page reference one second tick: 1001
[1702206576311] filterQuery changed to: 
[1702206576311] Start on page reference timer
[1702206577313] On page reference timer 1000ms = 1002ms
[1702206577651] On page reference one second tick: 1001
[1702206578654] On page reference one second tick: 1003
=====================================
[1702206578824] filterQuery changed to: name=foo
[1702206578824] Start on page reference timer
[1702206579654] On page reference one second tick: 1000
[1702206579825] On page reference timer 1000ms = 1001ms
[1702206580656] On page reference one second tick: 1002
[1702206581657] On page reference one second tick: 1001
[1702206581744] filterQuery changed to: 
[1702206581744] Start on page reference timer
[1702206582658] On page reference one second tick: 1001
[1702206582744] On page reference timer 1000ms = 1000ms
[1702206583658] On page reference one second tick: 1000
=====================================
[1702206584261] filterQuery changed to: name=foo
[1702206584261] Start on page reference timer
[1702206584659] On page reference one second tick: 1001
[1702206585262] On page reference timer 1000ms = 1001ms
[1702206585659] On page reference one second tick: 1000
[1702206586344] filterQuery changed to: 
[1702206586345] Start on page reference timer
[1702206586660] On page reference one second tick: 1001
[1702206587346] On page reference timer 1000ms = 1001ms
[1702206587661] On page reference one second tick: 1001
[1702206588661] On page reference one second tick: 1000
```


## Actual result:
From Playwright webkit build 1943:

Test might be fail because `expect` timeouted and on-page timer for 1 second timeout is vary in wall clock time from 1 second to even 5 seconds

Output of test result become like this:
```
Running 1 test using 1 worker

     1 [webkit] › filter.spec.ts:3:1 › test filter
[1702205785482] On page reference one second tick: 1000
=====================================
[1702205786093] filterQuery changed to: name=foo
[1702205786093] Start on page reference timer
[1702205786598] On page reference one second tick: 1116         <===== See here
[1702205788346] On page reference timer 1000ms = 2253ms         <===== See here
[1702205788347] On page reference one second tick: 1749         <===== See here
[1702205789393] On page reference one second tick: 1046
[1702205790210] filterQuery changed to: 
[1702205790210] Start on page reference timer
[1702205790416] On page reference one second tick: 1023
[1702205791212] On page reference timer 1000ms = 1002ms
[1702205791416] On page reference one second tick: 1000
[1702205792420] On page reference one second tick: 1004
=====================================
[1702205792827] filterQuery changed to: name=foo
[1702205792827] Start on page reference timer
[1702205793829] On page reference one second tick: 1409         <===== See here
[1702205793839] On page reference timer 1000ms = 1012ms
[1702205794830] On page reference one second tick: 1001
[1702205795831] On page reference one second tick: 1001
[1702205795898] filterQuery changed to: 
[1702205795898] Start on page reference timer
[1702205796832] On page reference one second tick: 1001
[1702205796899] On page reference timer 1000ms = 1001ms
[1702205797833] On page reference one second tick: 1001
=====================================
[1702205798834] On page reference one second tick: 1001
[1702205798840] filterQuery changed to: name=foo
[1702205798840] Start on page reference timer
[1702205800235] On page reference one second tick: 1401         <===== See here
[1702205800235] On page reference timer 1000ms = 1395ms         <===== See here
[1702205801229] On page reference one second tick: 994
[1702205801840] filterQuery changed to: 
[1702205801840] Start on page reference timer
[1702205802296] On page reference one second tick: 1067
[1702205802842] On page reference timer 1000ms = 1002ms
[1702205803297] On page reference one second tick: 1001
[1702205804298] On page reference one second tick: 1001
```