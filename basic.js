const user = {id: 11, name:'Riajul islam',job: 'Remote'}
const str = JSON.stringify(user)
//console.log(str)
const shop = {
    name : 'Riajul islam',
    address :'Ranbir Road',
    products : ['laptop','computer','papsi']
   

}
const shopStringified = JSON.stringify(shop)
//console.log(shop)
console.log(shopStringified)
const converted = JSON.parse(shopStringified)
console.log(converted)