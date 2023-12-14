const accountId = 1443;
let accountEmail = "sayannayek02@gmail.com"
var accountPassword = 12122
accountCity = "Kolkata"
let accountName;

accountEmail = "sayan1912@gmail.com"
accountPassword = 24641
accountCity = "Nadia"

/*
Didn,t used var for declaring a variable 
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountName])
/*
Output: 
| (index) │        Values         │
├─────────┼───────────────────────┤
│    0    │         1443          │
│    1    │ 'sayan1912@gmail.com' │
│    2    │         24641         │
│    3    │        'Nadia'        │
│    4    │       undefined       |

*/