# flex

- **flex-direction: column;--设置容器内部的排列方向**

  ```
  row:从左到右
  row-reverse:从右到左
  cow:从上到下
  column-reverse：从下到上
  ```

- **flex-wrap:wrap;--换行**

  ```
  nowrap:不换行
  wrap：换行
  ```

- **align-content: space-between;---flex容器可以把多余的轴线视为元素，可以进行对齐**

  ```
  center：居中
  flex-start：向左对齐
  flex-end：向右对齐
  stretch:无宽度，等比拉伸
  space-around:轴线两边空白等比分
  space-between:两端对齐，元素空白  等比分
  ```

- **align-items:baseline;--设置容器中 元素 在交叉轴上的对齐方式**

```
stretch:默认，当元素的高度没有设置，则元素的高度会拉伸至容器高度一致
flex-start:以最上面的x轴对齐
flex-end：以最下面的X轴对齐
center：以中间的x轴对齐
baseline:保证元素中文字在同一条基准线上
```



-  **align-self:stretch;--重写容器中元素在交叉轴上的对齐方式**

	auto：默认，表示继承父级元素align-items属性
	stretch:默认，当元素的高度没有设置，则元素的高度会拉伸至容器高度一致
	flex-start:以最上面的x轴对齐
	flex-end：以最下面的X轴对齐
	center：以中间的x轴对齐
	baseline:保证元素中文字在同一条基准线上

- **justify-content:space-between;--设置元素在主轴上的对其位置**

	flex-start:默认，左对齐
	flex-end:默认，右对齐
	center:居中对齐
	space-between:两端对齐，元素之间平等分剩余空白均匀的填充到flex成员项之间
	space-around:元素两边平等分剩余空白间隙部分， 最左或最右和元素之间距离1：2	

- ```
  order:用于设置flex容器内部的每一个元素的而排列顺序，默认是0，从小到大
  flex-grow:用于设置元素比例的放大，默认为0，不放大
  flex-shrink:用于定义属性的缩放比例，默认为1，色设置为0的时候，不进行缩放
  flex-basis:设置元素固定或自动空间的占比
  ```

  