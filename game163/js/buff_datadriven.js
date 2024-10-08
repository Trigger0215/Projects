// 第一部分数据驱动实现
var hotGoods = document.getElementById('hotGoods').children;
var section1Select = document.getElementById('section1Select').children;

// initial
CSRender();

for (let k = 0; k < section1Select.length; k++) {
    section1Select[k].addEventListener('click', function() {
        if (k === 0) {
            CSRender();
            expect(section1Select);
            section1Select[k].style.borderColor = '#bf9e4b';
        } else {
            renderDota(hotGoods, section1DotaData);
            expect(section1Select);
            section1Select[k].style.borderColor = '#bf9e4b';
        }
    })
}


// 第二部分数据驱动通过调用函数实现
var section2Goods = document.getElementById('section2Goods').children;
// console.log(section2Goods); => success
var section2Select = document.getElementById('section2Select').children;

// section2 initial
render(section2Goods, section2Data);

for (let i = 0; i < section2Select.length; i++) {
    section2Select[i].addEventListener('click', function() {
        if (i === 0) {
            render(section2Goods, section2Data);
            expect(section2Select);
            section2Select[i].style.borderColor = '#3d547d';
        } else {
            renderDota(section2Goods, section2DotaData);
            expect(section2Select);
            section2Select[i].style.borderColor = '#3d547d';
        }
    });
}


// 第三部分数据驱动通过调用函数实现
var section3Goods = document.getElementById('section3Goods').children;
var section3Select = document.getElementById('section3Select').children;

// section3 initial
render(section3Goods, section3Data);

for (let j = 0; j < section3Select.length; j++) {
    section3Select[j].addEventListener('click', function() {
        if (j === 0) {
            render(section3Goods, section3Data);
            expect(section3Select);
            section3Select[j].style.borderColor = '#bf9e4b';
        } else {
            renderDota(section3Goods, section3DotaData);
            expect(section3Select);
            section3Select[j].style.borderColor = '#bf9e4b';
        }
    });
}

// 导航栏控制所有三个部分的渲染
var droplist = document.getElementById('droplist').children;
var nowContent = document.getElementById('nowcontent');
// console.log(droplist); => success

// initial
droplist[0].style.color = '#ffbd46';
nowContent.textContent = gameData[0].name;
var icon = document.createElement('img');
icon.classList.add('icon');
icon.src = gameData[0].iconurl;
nowContent.appendChild(icon);

for (let l = 0; l < droplist.length; l++) {
    droplist[l].addEventListener('click', function() {
        if (l === 0) {
            expectColor(droplist);
            droplist[l].style.color = '#ffbd46';
            nowContent.textContent = gameData[l].name;
            icon.src = gameData[l].iconurl;
            nowContent.appendChild(icon);

            renderAllCs();
            section1Select[l].style.borderColor = '#bf9e4b';
            section2Select[l].style.borderColor = '#3d547d';
            section3Select[l].style.borderColor = '#bf9e4b';
        } else {
            expectColor(droplist);
            droplist[l].style.color = '#ffbd46';
            nowContent.textContent = gameData[l].name;
            icon.src = gameData[l].iconurl;
            nowContent.appendChild(icon);

            renderAllDota();
            section1Select[l].style.borderColor = '#bf9e4b';
            section2Select[l].style.borderColor = '#3d547d';
            section3Select[l].style.borderColor = '#bf9e4b';
        }
    });
}
