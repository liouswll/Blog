## 基本算法排序
`https://juejin.im/post/5b72f0caf265da282809f3b5#heading-4`
- 基本排序思想非常类似，重排列时用的技术都是一组嵌套的for循环：外循环便遍历数组的每一项，内循环用于比较数组。

- 时间复杂度： 时间复杂度的计算并不是计算程序具体运行的时间，而是算法执行语句的次数。
当我们面前有多个算法时，我们可以通过计算时间复杂度，判断出哪一个算法在具体执行时花费时间最多和最少。

- 空间复杂度： 空间复杂度是对一个算法在运行过程中临时占用存储空间大小的量度
## 冒泡排序
- 基本原理： 比较两个相邻的元素，将值大的交换到右端（每次获得最大的数）

- 基本思路： 依次比较相邻的两个数，将小数放在前面，大数放在后面。即在第一趟：首先比较第1个和第2个数，将小数放前，大数放后。然后比较第2个数和第3个数，将小数放前，大数放后，如此继续，直至比较最后两个数，将小数放前，大数放后。重复第一趟步骤，直至全部排序完成。

- 第一趟比较完成后，最后一个数一定是数组中最大的一个数，所以第二趟比较的时候最后一个数不参与比较；第二趟比较完成后，倒数第二个数也一定是数组中第二大的数，所以第三趟比较的时候最后两个数不参与比较；依次类推，每一趟比较次数-1；

```
示例
E A D B H  (1)
A E D B H  (2)
A D E B H  (3)
...
```

```
function bubleSort(arr) {
    var len = arr.length;
    for (let outer = len ; outer >= 2; outer--) {
        for(let inner = 0; inner <=outer - 1; inner++) {
            if(arr[inner] > arr[inner + 1]) {
                let temp = arr[inner];
                arr[inner] = arr[inner + 1];
                arr[inner + 1] = temp;
            }
        }
    }
    return arr;
}
```

## 选择排序
- 基本原理： 选择排序是从数组的开头开始，将第一个元素和其他元素作比较，检查完所有的元素后，最小的放在第一个位置，接下来再开始从第二个元素开始，重复以上一直到最后。
```
function selectSort(arr) {
    var len = arr.length;
    for(let i = 0 ;i < len - 1; i++) {
        for(let j = i ; j<len; j++) {
            if(arr[j] < arr[i]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]; // 解构赋值
            }
        }
    }
    return arr
}

外层循环的i表示第几轮，arr[i]就表示当前轮次最靠前(小)的位置；
内层从i开始，依次往后数，找到比开头小的，互换位置即可
```


## 插入排序
- 基本原理： 首先将待排序的第一个记录作为一个有序段，从第二个开始，到最后一个，依次和前面的有序段进行比较，确定插入位置。
- 扑克牌思想： 就想着自己在打扑克牌，接起来一张，放哪里无所谓，再接起来一张，比第一张小，放左边，继续接，可能是中间数，就插在中间....依次
```
首先将待排序的第一个记录作为一个有序段
从第二个开始，到最后一个，依次和前面的有序段进行比较，确定插入位置

function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
        for(let j = i; j > 0; j--) {  //j = i,将arr[j]依次插入有序段中
            if(arr[j] < arr[j-1]) {
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}
i是外循环，依次把后面的数插入前面的有序序列中，默认arr[0]为有序的，i就从1开始

j进来后，依次与前面队列的数进行比较，因为前面的序列是有序的，因此只需要循环比较、交换即可

注意这里的break，因为前面是都是有序的序列，所以如果当前要插入的值arr[j]大于或等于arr[j-1]，则无需继续比较，直接下一次循环就可以了。
```

## 时间复杂度
|排序算法|平均时间复杂度|最坏时间复杂度	|空间复杂度|是否稳定|
|--|--|--|--|--|
|冒泡排序|O(n²)|O(n²)|O(1)|是|
|选择排序|O(n²)|O(n²)|O(1)|不是|
|直接插入排序|O(n²)|O(n²)|O(1)|是|
|快速排序|O(nlogn)|O(n²)|O(logn)|不是|
|希尔排序|O(nlogn)|O(n^s)|O(1)|不是|

## 是否稳定
- 有两个相同的数A和B，在排序之前A在B的前面，而经过排序之后，B跑到了A的前面，对于这种情况的发生，我们管他叫做排序的不稳定性

- 稳定性有什么意义？ 个人理解对于前端来说，比如我们熟知框架中的虚拟DOM的比较，我们对一个`<ul>`列表进行渲染，当数据改变后需要比较变化时，不稳定排序或操作将会使本身不需要变化的东西变化，导致重新渲染，带来性能的损耗。

## 高级算法排序
## 快速排序
- 基本原理： 快排是处理大数据最快的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直至所有数据都是有序的。

- 找到一个数作为参考，比这个数字大的放在数字左边，比它小的放在右边； 然后分别再对左边和右变的序列做相同的操作  
  1. 选择一个基准元素，将列表分割成两个子序列。
  2. 对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
  3. 分别对较小元素的子序列和较大元素的子序列重复步骤1和2。
  
```
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;  //递归出口
    }
    var left = [],
        right = [],
        current = arr.splice(0,1); //注意splice后，数组长度少了一个
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < current) {
            left.push(arr[i])  //放在左边
        } else {
            right.push(arr[i]) //放在右边
        }
    }
    return quickSort(left).concat(current,quickSort(right)); //递归
}
```

## 希尔排序
- 基本原理：插入排序的改良算法，但是核心理念与插入算法又不同，它会先比较距离较远的元素，而非相邻的元素。
```
insertSort(arr,[3,2,1]);
function shellSort(arr,gap) {
    console.log(arr)//为了方便观察过程，使用时去除
    for(let i = 0; i<gap.length; i++) {  //最外层循环，一次取不同的步长，步长需要预先给出
        let n = gap[i]; //步长为n
        for(let j = i + n; j < arr.length; j++) { //接下类和插入排序一样，j循环依次取后面的数
            for(let k = j; k > 0; k-=n) { //k循环进行比较，和直接插入的唯一区别是1变为了n
                if(arr[k] < arr[k-n]) {
                    [arr[k],arr[k-n]] = [arr[k-n],arr[k]];
                    console.log(`当前序列为[${arr}] \n 交换了${arr[k]}和${arr[k-n]}`)//为了观察过程
                } else {
                    continue;
                }
            }
        }
    }
    return arr;
}

```

