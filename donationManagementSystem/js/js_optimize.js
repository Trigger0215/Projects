document.addEventListener('DOMContentLoaded', function() {
    // 优化统一思路: 
    // 1. 所有的增删改全部针对于数组对象的值来修改
    // 2. 表格渲染的方式(函数)有所改变
    // 3. 对应删改的方法位置有所改变
    // 4. 行修改内容的方式(监听)有所改变
    // 5. 新增完善查询功能
    // 6. 以及在查询时的增删改
    // 7. 为了适配查询的表格渲染,在2的基础上将渲染表格的函数加入形参来达到所有表格的任意渲染!
    // 在此为节省行数 数据对象格式做出缩写调整

    var donatedCompany = [
        {value: 'Yi', text: '壹基金'},
        {value: 'CiShan', text: '慈善总会'},
        {value: 'FuPin', text: '中国扶贫基金会'}];
    var donateInfo = [
        {donator: '张三', donatedCompany: donatedCompany[0].text, money: 6666, donatedDate: '1999-01-01'},
        {donator: '李四', donatedCompany: donatedCompany[1].text, money: 1438, donatedDate: '2018-01-01'},
        {donator: '小五',  donatedCompany: donatedCompany[2].text, money: 9999, donatedDate: '2009-01-01'},
        {donator: '王八', donatedCompany: donatedCompany[0].text, money: 3838438, donatedDate: '2024-01-01'}];
    let currentIndex = 0;

    // 渲染各个select下的option
    var searchSelect = document.getElementById('searchFund');
    var addSelect = document.getElementById('addFund');
    var editSelect = document.getElementById('editFund');

    // 封装渲染
    function renderData(data) {
        // 遍历值
        donatedCompany.forEach(function(optionData) {
            // 新建option元素
            var optionElement = document.createElement('option');
            // 赋值
            optionElement.value = optionData.value;
            optionElement.textContent = optionData.text;
            // 渲染
            data.appendChild(optionElement);
        });
    }

    // 渲染需显示的表格
    function renderInfos(obj) {
        // 获取对应tbody元素(索引0 => 第一个)
        var tbody = document.getElementById('info').getElementsByTagName('tbody')[0];

        // 改点1: 每次调用该函数渲染时,通过先清除之前的元素,再重新渲染则不会出现新增或删除调用该函数的Bug
        while(tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
            currentIndex = 0;
        }

        // 遍历值
        obj.forEach(function(Info) {
            var row = document.createElement('tr');

            var rowIndex = document.createElement('td');
            rowIndex.className = 'index';
            rowIndex.textContent = ++currentIndex;
            row.appendChild(rowIndex);

            var rowDonator = document.createElement('td');
            rowDonator.textContent = Info.donator;
            row.appendChild(rowDonator);

            var rowDonateCompany = document.createElement('td');
            rowDonateCompany.textContent = Info.donatedCompany;
            row.appendChild(rowDonateCompany);

            var rowMoney = document.createElement('td');
            rowMoney.textContent = Info.money;
            row.appendChild(rowMoney);

            var rowDate = document.createElement('td');
            rowDate.textContent = Info.donatedDate;
            row.appendChild(rowDate);

            var rowOperate = document.createElement('td');
            rowOperate.className = 'operate';
            // 列内元素
            // 改点2: 通过如下的方式去创建td内的元素,比innerHTML方式更加灵活
            var edit_link = document.createElement('a');
            edit_link.href = 'javascript:void(0)';
            edit_link.className = 'edit_link';
            edit_link.textContent = '修改 ';
            var delete_link = document.createElement('a');
            delete_link.href = 'javascript:void(0)';
            delete_link.className = 'delete_link';
            delete_link.textContent = ' 删除';

            rowOperate.appendChild(edit_link);
            rowOperate.appendChild(delete_link);
            
            // 改点3: 事件在表格里，则在渲染时就为其添加事件!
            delete_link.addEventListener('click', function() {
                var tr = this.closest('tr');
                var Index = tr.rowIndex - 1;

                if (confirm('确认删除该条信息吗?')) {
                    // tr.remove();
                    // donateInfo.splice(Index, 1);
                    // obj.splice(Index, 1);
                if (obj.length === donateInfo.length) {
                    donateInfo.splice(Index, 1);
                } else {
                    for (let i = 0; i < donateInfo.length; i++) {
                        if (obj[Index].donator === donateInfo[i].donator && obj[Index].donatedCompany === donateInfo[i].donatedCompany && obj[Index].money === donateInfo[i].money && obj[Index].donatedDate === donateInfo[i].donatedDate) {
                            obj.splice(Index, 1);
                            donateInfo.splice(i, 1);
                            break;      // 避免单击多删Bug
                        }
                    }
                }
                    renderInfos(obj);
                } else {
                    return false;
                }
            });
            
            edit_link.addEventListener('click', function() {
                var tr = this.closest('tr');
                var Index = tr.rowIndex - 1;
                var editForm = document.getElementById('editForm');

                // 弹窗
                var editBox = document.getElementById('editBox');
                editBox.style.display = 'block';
                var editDonator = document.getElementById('editDonator');
                var editFund = document.getElementById('editFund');
                var editMoney = document.getElementById('editMoney');
                var editDate = document.getElementById('editDate');
                editDonator.value = obj[Index].donator;
                // editFund.value = obj[Index].donatedCompany;
                // 转value
                for (let i = 0; i < donatedCompany.length; i++) {
                    if (obj[Index].donatedCompany === donatedCompany[i].text) {
                        editFund.value = donatedCompany[i].value;
                    }
                }
                editMoney.value = obj[Index].money;
                editDate.value = obj[Index].donatedDate;
                // console.log(obj[Index].donatedCompany);  => 打印的textContent 在上方代码中转value
                // 监听input失焦
                editDonator.addEventListener('blur', function() {
                    // 各个input均做自己的异常处理
                    if (editDonator.value.length < 2) {
                        alert('捐赠人姓名不少于2个字符!');
                        editDonator.value = obj[Index].donator;
                        return false;
                    } else {
                        obj[Index].donator = editDonator.value;
                    }
                });
                // select框用change事件做监听
                editFund.addEventListener('change', function() {
                    for (let i = 0; i < donatedCompany.length; i++) {
                        if (editFund.value === donatedCompany[i].value) {
                            obj[Index].donatedCompany = donatedCompany[i].text;
                        }
                    }
                });
                editMoney.addEventListener('blur', function() {
                    if (isNaN(Number(editMoney.value)) || editMoney.value <= 1) {
                        alert('捐赠金额必须为大于1的数字!');
                        editMoney.value = obj[Index].money;
                        return false;
                    } else {
                        obj[Index].money = editMoney.value;
                    }
                });
                editDate.addEventListener('blur', function() {
                    let rule = /^(19[0-9][0-9]|20[0-1][0-9]|202[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
                    if (rule.test(editDate.value) === false) {
                        alert('日期格式不合法,请按格式YYYY(1900~2024)-MM(01~12)-DD(01~31)输入!');
                        editDate.value = obj[Index].donatedDate;
                        return false;
                    } else {
                        obj[Index].donatedDate = editDate.value;
                    }
                });
                // 监听确认按钮
                var editBtn = document.getElementById('editBtn');
                editBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    editBox.style.display = 'none';
                    // 改点4: 通过每次点击修改链接时,删除表格并重新渲染表格,可以避免上一次修改的数据被本次修改的数据覆盖
                    // 同时,每次删除表格内元素后,也要重新获取对应select元素的id,因为select内部的option也是通过数组对象动态渲染的
                    while(editForm.firstChild) {
                        editForm.removeChild(editForm.firstChild);
                    }
                    editForm.innerHTML = '<div>捐赠人: <input type="text" id="editDonator" class="edit"></div><div>受捐单位: <select id="editFund"></select></div><div>金额: <input type="text" id="editMoney" class="edit"></div><div>受捐日期: <input type="text" id="editDate" class="edit"></div><button id="editBtn">修改</button>';
                    var editSelect = document.getElementById('editFund');
                    renderData(editSelect);

                    alert("修改成功! 如果修改了受捐单位请再次点击查询来更新!")
                    renderInfos(obj);
                })
            });

            row.appendChild(rowOperate);
            tbody.appendChild(row);

        });
    }

    // 表格外的事件(如新增),写在渲染函数外,处理数据必须是对数组对象内的值或者数组内的对象做处理!
    // 新增
    var addBtn = document.getElementById('add');
    addBtn.addEventListener('click', function() {
        var newData = {};
        var newDonator = document.getElementById('donator');
        var newDonatedCompanies = document.getElementById('addFund');
        // console.log(newDonatedCompanies.value);   打印的value => 转text
        // newData.donatedCompany 在下方循环中赋值
        var newDonateMoney = document.getElementById('money');
        var newDonateDate = document.getElementById('date');

        // 添加异常处理
        var tmp = newDonatedCompanies.value; // tmp用来与原select框的value做对比
        let rule = /^(19[0-9][0-9]|20[0-1][0-9]|202[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
        if (newDonator.value.length < 2) {
            alert('捐赠人姓名不少于2个字符!');
            return false;
        } else if (tmp === 'default') {
            alert('请选择受捐单位!');
            return false;
        } else if (isNaN(Number(newDonateMoney.value)) || newDonateMoney.value <= 1) {
            alert('捐赠金额必须为大于1的数字!');
            return false;
        } else if (rule.test(newDonateDate.value) === false) {
            alert('日期格式不合法,请按格式YYYY(1900~2024)-MM(01~12)-DD(01~31)输入!');
            return false;
        } else {
            // all pass
            newData.donator = newDonator.value;
            for (let i = 0; i < donatedCompany.length; i++) {
                if (newDonatedCompanies.value === donatedCompany[i].value) {
                    newData.donatedCompany = donatedCompany[i].text;
                }
            }
            newData.money = Number(newDonateMoney.value);
            newData.donatedDate = newDonateDate.value;
            donateInfo.push(newData);
            // 清空新增input框
            newDonator.value = '';
            newDonatedCompanies.value = 'default';
            newDonateMoney.value = '';
            newDonateDate.value = '';

            if (searchFund.value === 'default') {
                renderInfos(donateInfo);
            } else {
                alert("添加成功! 再次点击查询刷新!");
            }
        }

    });

    // 查询
    var searchFund = document.getElementById('searchFund');
    var search = document.getElementById('search');
    search.addEventListener('click', function() {
        // console.log(searchFund.value);   => value值
        // 做判断
        if (searchFund.value === 'default') {
            renderInfos(donateInfo);
        } else if (searchFund.value === donatedCompany[0].value) {
            var searchData = [];
            var temp = donatedCompany[0].text;
            for (let i = 0; i < donateInfo.length; i++) {
                if (donateInfo[i].donatedCompany === temp) {
                    searchData.push(donateInfo[i]);
                    renderInfos(searchData);
                } else {
                    renderInfos(searchData);
                }
            }
        } else if (searchFund.value === donatedCompany[1].value) {
            var searchData = [];
            var temp = donatedCompany[1].text;
            for (let i = 0; i < donateInfo.length; i++) {
                if (donateInfo[i].donatedCompany === temp) {
                    searchData.push(donateInfo[i]);
                    renderInfos(searchData);
                } else {
                    renderInfos(searchData);
                }
            }
        } else if (searchFund.value === donatedCompany[2].value) {
            var searchData = [];
            var temp = donatedCompany[2].text;
            for (let i = 0; i < donateInfo.length; i++) {
                if (donateInfo[i].donatedCompany === temp) {
                    searchData.push(donateInfo[i]);
                    renderInfos(searchData);
                } else {
                    renderInfos(searchData);
                }
            }
        }

    });

    // 初始化渲染
    renderData(searchSelect);
    renderData(addSelect);
    renderData(editSelect);
    renderInfos(donateInfo);

})
