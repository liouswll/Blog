(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{434:function(t,e,n){"use strict";n.r(e);var a=n(43),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"核心概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),n("h2",{attrs:{id:"jsx简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsx简介"}},[t._v("#")]),t._v(" JSX简介")]),t._v(" "),n("ol",[n("li",[t._v("JSX嵌入表达式")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const element = <h1>Hello, {name}</h1>;\n<h1>\n    Hello, {formatName(user)}!\n</h1>\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("JSX也是一个表达式")]),t._v(" "),n("li",[t._v("JSX特定属性"),n("br"),t._v("\n使用引号将属性值指定为字符串字面量   "),n("code",[t._v('const element = <div tabIndex="0"></div>')]),t._v(";"),n("br"),t._v("\n使用大括号，将属性值里插入JavaScript表达式 "),n("code",[t._v("const element = <img src={user.avatarUrl}></img>;")]),n("br"),t._v("\n使用JSX指定子元素，如果标签里没有内容，用 /> 闭合标签"),n("br"),t._v("\nJSX防注入攻击，React渲染是默认会进行转译，，所有渲染的内容会被转换为字符串"),n("br"),t._v("\nJSX表示对象")])]),t._v(" "),n("h2",{attrs:{id:"元素渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#元素渲染"}},[t._v("#")]),t._v(" 元素渲染")]),t._v(" "),n("ol",[n("li",[t._v("将一个元素渲染为DOM")]),t._v(" "),n("li",[t._v("更新已经渲染的元素")]),t._v(" "),n("li",[t._v("React只更需要更新的地方，会将元素和它的子元素与之前的状态进行比较，进行必要的更新。")])]),t._v(" "),n("h2",{attrs:{id:"组件与props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件与props"}},[t._v("#")]),t._v(" 组件与Props")]),t._v(" "),n("ol",[n("li")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Welcome extends React.Component {\nrender() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n接受唯一带有数据的Props（属性）对象，返回React元素。称为函数组件，本质上为JavaScript函数\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("组件必须大写字母开头")]),t._v(" "),n("li",[t._v("组合组件")]),t._v(" "),n("li",[t._v("提取组件")]),t._v(" "),n("li",[t._v("prop的只读性")])]),t._v(" "),n("blockquote",[n("blockquote",[n("p",[t._v("组件无论是使用函数函数声明还是通过calss声明，都绝不能修改自身的props。"),n("br"),t._v("\n纯函数： 函数不会尝试更改入参，多次调用下，相同的入参始终返回相同的结果")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("纯函数\n\tfunction sum(a, b) {\n\t\treturn a + b;\n\t}\n\n\t非纯函数\n\tfunction withdraw(account, amount) {\n\t\taccount.total -= amount;\n\t}\n")])])]),n("ol",{attrs:{start:"6"}},[n("li",[t._v("无状态组件：一个组件无需管理state，只是纯粹的展示")])]),t._v(" "),n("h2",{attrs:{id:"state与生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#state与生命周期"}},[t._v("#")]),t._v(" state与生命周期")]),t._v(" "),n("ol",[n("li",[t._v("state组件私有，完全受控于当前组件")]),t._v(" "),n("li",[t._v("state\n"),n("ol",[n("li",[t._v("不能直接修改state")]),t._v(" "),n("li",[t._v("state  props更新可能会是异步更新，不要依赖其更新下一个状态")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("// Wrong"),n("br"),t._v("\nthis.setState({"),n("br"),t._v("\ncounter: this.state.counter + this.props.increment,"),n("br"),t._v("\n})"),n("br"),t._v("\n可以解决上述问题  setState可以接受一个函数"),n("br"),t._v("\n// Correct"),n("br"),t._v("\nthis.setState((state, props) => ({"),n("br"),t._v("\ncounter: state.counter + props.increment"),n("br"),t._v("\n}));")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("数据向下流动：state 派生的任何数据或 UI 只能影响树中“低于”它们的组件")])]),t._v(" "),n("h2",{attrs:{id:"事件处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[t._v("#")]),t._v(" 事件处理")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("React 事件的命名采用小驼峰式（camelCase），而不是纯小写")])]),t._v(" "),n("li",[n("p",[t._v("JSX传入函数作为事件处理函数，而不是一个字符串")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\t传统的HTML\n\t<button onclick="activateLasers()">\n\t\tActivate Lasers\n\t</button>\n\n\tReact\n\t<button onClick={activateLasers}>\n\t\tActivate Lasers\n\t</button>\n')])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[t._v("React中不能通过返回false的方式阻止默认事件，显示方式e.preventDefault()")])]),t._v(" "),n("li",[n("p",[t._v("React中回调函数的this，class方法不会默认绑定this，如果忘记绑定this指向则为undefined【bind】")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\tonClick={() => this.handleClick()}\n\tonClick={this.handleClick}\n\thandleClick = () => {\n    \tconsole.log('this is:', this);\n  \t}\n")])])]),n("ol",{attrs:{start:"5"}},[n("li",[t._v("向事件处理程序传递参数")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\t<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>\n\t<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>\n\t两种情况React事件对象e都会被传递，箭头函数方式是显式传递，bind方法为隐式传递\n")])])]),n("h2",{attrs:{id:"条件渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[t._v("#")]),t._v(" 条件渲染")]),t._v(" "),n("ol",[n("li",[t._v("可以使用运算符if或者条件运算符创建元素表现当前状态")]),t._v(" "),n("li",[t._v("元素变量\t"),n("code",[t._v("<Greeting isLoggedIn={isLoggedIn} />")])]),t._v(" "),n("li",[t._v("与运算符&&")]),t._v(" "),n("li",[t._v("三目运算符")]),t._v(" "),n("li",[t._v("阻止组件渲染"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("render直接返回null，不进行渲染  \nfunction WarningBanner(props) {  \n\tif (!props.warn) {  \n\treturn null;  \n}  \n<WarningBanner warn={this.state.showWarning} /> \n")])])])])]),t._v(" "),n("h2",{attrs:{id:"列表与key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#列表与key"}},[t._v("#")]),t._v(" 列表与Key")]),t._v(" "),n("ol",[n("li",[t._v("渲染多个组件, 利用map渲染")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const numbers = [1, 2, 3, 4, 5];\nconst listItems = numbers.map((number) =>\n  <li>{number}</li>\n)\n\nReactDOM.render(\n  <ul>{listItems}</ul>,\n  document.getElementById('root')\n);\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("基础列表组件 : 每创建一个元素时，必须包含一个特殊的key属性")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function NumberList(props) {\n  const numbers = props.numbers;\n  const listItems = numbers.map((number) =>\n    <li key={number.toString()}>\n      {number}\n    </li>\n  );\n  return (\n    <ul>{listItems}</ul>\n  );\n}\n\nconst numbers = [1, 2, 3, 4, 5];\nReactDOM.render(\n  <NumberList numbers={numbers} />,\n  document.getElementById('root')\n);\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("key")])]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("帮助react识别哪些元素改变，给数组中每个元素赋上确定的标识\n通常使用数据的id为key\nindex可以作为key，如果列表顺序会发生变化，不建议使用索引作为key值，会导致性能变差，可能会引起组件状态问题。\n如果不显式的指定key，react会默认使用索引作为列表项目的值")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("key只有放在就近的数组上下文中才有意义，map()方法中需要设定key属性")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("可以在兄弟节点直接必须唯一，可以信息会传递给react，不会传递给组件，\t如果组件中需要使用，必须用其他属性名显式传递")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[t._v("JSX允许在大括号中嵌入任何表达式")])])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function NumberList(props) {\n  const numbers = props.numbers;\n  return (\n    <ul>\n      {numbers.map((number) =>\n        <ListItem key={number.toString()}\n        value={number} />\n      )}\n    </ul>\n  );\n}\n")])])]),n("h2",{attrs:{id:"表单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[t._v("#")]),t._v(" 表单")]),t._v(" "),n("ol",[n("li",[t._v("表单元素")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<input>、 <textarea> 和 <select>\nclass FlavorForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {value: \'coconut\'};\n\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({value: event.target.value});\n  }\n\n  handleSubmit(event) {\n    alert(\'你喜欢的风味是: \' + this.state.value);\n    event.preventDefault();\n  }\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          选择你喜欢的风味:\n          <select value={this.state.value} onChange={this.handleChange}>\n            <option value="grapefruit">葡萄柚</option>\n            <option value="lime">酸橙</option>\n            <option value="coconut">椰子</option>\n            <option value="mango">芒果</option>\n          </select>\n        </label>\n        <input type="submit" value="提交" />\n      </form>\n    );\n  }\n}\n')])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("受控组件")])]),t._v(" "),n("ul",[n("li",[t._v("React的state成为唯一数据源，渲染表单的React组件，还控制着用户输入过程中的表单发生的操作，。被React以这种方式控制取值的表单输入元素就叫做受控组件。")]),t._v(" "),n("li",[t._v("输入值始终由React的state驱动")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("处理多个输入：可以给每个元素添加name属性，处理函数根据e.target.name执行操作")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('class Reservation extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isGoing: true,\n      numberOfGuests: 2\n    };\n\n    this.handleInputChange = this.handleInputChange.bind(this);\n  }\n\n  handleInputChange(event) {\n    const target = event.target;\n    const value = target.name === \'isGoing\' ? target.checked : target.value;\n    const name = target.name;\n\n    this.setState({\n      [name]: value\n    });\n  }\n\n  render() {\n    return (\n      <form>\n        <label>\n          参与:\n          <input\n            name="isGoing"\n            type="checkbox"\n            checked={this.state.isGoing}\n            onChange={this.handleInputChange} />\n        </label>\n        <br />\n        <label>\n          来宾人数:\n          <input\n            name="numberOfGuests"\n            type="number"\n            value={this.state.numberOfGuests}\n            onChange={this.handleInputChange} />\n        </label>\n      </form>\n    );\n  }\n}\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("受控组件输入空值")])]),t._v(" "),n("ul",[n("li",[t._v("受控组件指定的value，props会阻止用户更改输入，如果指定value，但输入仍可以编辑，可能意外的将value设置成了undefined，null")])]),t._v(" "),n("h2",{attrs:{id:"状态提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状态提升"}},[t._v("#")]),t._v(" 状态提升")]),t._v(" "),n("ol",[n("li",[t._v("将多个组件共用的state向上移动到它们最近共同的父组件中，实现共享state依靠自上而下的数据流")])]),t._v(" "),n("h2",{attrs:{id:"组合vs继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合vs继承"}},[t._v("#")]),t._v(" 组合VS继承")]),t._v(" "),n("ol",[n("li",[t._v("组合\n包含关系\n特例关系")]),t._v(" "),n("li",[t._v("继承\n无需使用继承构建组件")])])])}),[],!1,null,null,null);e.default=s.exports}}]);