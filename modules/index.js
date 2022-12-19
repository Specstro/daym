const Booru = require('booru')

const q = "uncensored,blonde hair,penis,cum,genshin impact,pregnant"
const l = q.replaceAll(' ', '_')
tags1 = l.split(",")[0] || ''
tags2 = l.split(",")[1] || ''
tags3 = l.split(",")[2] || ''
tags4 = l.split(",")[3] || ''
tags5 = l.split(",")[4] || ''
tags6 = l.split(",")[5] || ''
tags7 = l.split(",")[6] || ''
tags8 = l.split(",")[7] || ''
tags9 = l.split(",")[8] || ''
tags10 = l.split(",")[9] || ''

console.log(`Tags : ${tags1} ${tags2} ${tags3} ${tags4} ${tags5} ${tags6} ${tags7} ${tags8} ${tags9} ${tags10}`)

Booru.search('kc', [tags1, tags2, tags3, tags4, tags5, tags6, tags7, tags8, tags9,tags10], { limit: 1, random: true }).then(
  posts => {
    for (let post of posts) {
    console.log(post.fileUrl)
    }
  },
).catch(error => reply('Error : '+error))
