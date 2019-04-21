/**
 * 散列表-JavaScript实现
 * 数据类型：字符串
 * 冲突解决方法：线性探测法
 */
// 线性探测法：当发生散列冲突时，就检查散列表的下一个位置是否为空，如果为空，就将数据存入位置；如果不为空，则继续检查
// 下一个位置，直到找到一个空的位置存放数据。

class HashTable{
    constructor(){
        this.table = new Array(137);     // 存储键值，以便判断寻找下个位置。
        this.values = new Array();     // 存储数据
    }

    // 利用散列函数计算输入字符串的散列值
    put(key,data){
        let pos = this.betterHash(key);
        if(this.table[pos] == undefined){
            this.table[pos] = key;
            this.values[pos] = data;
        }else{
            while(this.table[pos] != undefined){   // 循环检测直到有空位置为止
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }

    // 获取 key 对应的值
    get(key){
        let hash = -1;
        hash = this.betterHash(key);
        if (hash > -1) {
            for(let i = hash; this.table[hash] != undefined; i++){
                if(this.table[hash] == key){
                    return this.values[hash];
                }
            }
        }
        return -1;
    }

    // 打印散列表中的值
    display(){
        let n = 0;
        for(let i = 0; i < this.table.length; i++){
            if (this.table[i] != void 0){
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