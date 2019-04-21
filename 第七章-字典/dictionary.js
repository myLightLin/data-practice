/**
 * 字典-JavaScript 实现
 */

class Dictionary{
    constructor(){
        this.dataStore = new Array();
    }

    // 添加键值对
    add(key,value){
        this.dataStore[key] = value;
    }

    // 查找指定 key 的值
    find(key){
        if(!this.dataStore[key]) return -1;
        return this.dataStore[key];
    }

    // 删除指定的 key 值
    remove(key){
        delete this.dataStore[key];
    }

    // 字典中的元素个数
    count(){
        let n = 0;
        for(let key of Object.keys(this.dataStore)){
            ++n;
        }
        return n;
    }

    // 清空所以元素
    clear(){
        for(let key of Object.keys(this.dataStore)){
            delete this.dataStore[key];
        }
    }

    // 打印字典元素, 并且输出有序的元素
    display(){
        for(let key of Object.keys(this.dataStore).sort()){
            console.log(key + ": "+this.dataStore[key]);
        }
    }
}

// Test
var book = new Dictionary();
book.add("quenue","123");
book.add("light","456");
book.add("john","hhh");
console.log(book.count());
book.display();
book.clear();
console.log(book.count());