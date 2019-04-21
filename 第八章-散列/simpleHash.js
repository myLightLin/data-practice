/**
 * 简单的散列表-JavaScript实现
 * 数据类型：字符串
 */

class HashTable{
    constructor(){
        this.table = new Array(137);     // 足够多的数组空间
    }

    // 利用散列函数计算输入字符串的散列值
    put(data){
        let pos = this.betterHash(data);
        this.table[pos] = data; 
    }

    // 打印散列表中的值
    display(){
        let n = 0;
        for(let i = 0; i < this.table.length; i++){
            if (this.table[i] != undefined ){
                console.log(i + ": " + this.table[i]);
            }
        }
    }

    // 散列函数，依照霍纳算法计算散列值，此算法计算字符串的 ASCII 码值并在求和时乘以一个质数，这里选择 31
    betterHash(str){
        const H = 31;
        let total = 0;
        for(let i=0;i<str.length;i++){
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0){
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
}

let someNames = ["David","Jennifer","Donnie","Raymond","Cynthia","Mike","Clayton","Danny","Jonathan"];
let test = new HashTable();
for(let i=0;i<someNames.length;i++){
    test.put(someNames[i]);
}
test.display();

// 输出结果
// 3: David
// 25: Raymond
// 37: Donnie
// 61: Jonathan
// 75: Danny
// 82: Mike
// 102: Jennifer
// 130: Clayton
// 131: Cynthia
