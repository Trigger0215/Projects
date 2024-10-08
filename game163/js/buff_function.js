(function() {

    // 封装一个选类函数
    function selectColor(obj) {
        if (obj.wearNumber <= 7) {
            return 'factorynew';
        } else if (obj.wearNumber <= 15) {
            return 'slightlyworn';
        } else if (obj.wearNumber <= 38) {
            return 'wellworn';
        } else if (obj.wearNumber <= 45) {
            return 'battlescarred';
        } else if (obj.wearNumber <= 80) {
            return 'heavilyworn';
        }
    }

    // 封装第一部分CS渲染函数
    function CSRender() {
        for (let i = 0; i < hotGoods.length; i++) {
            hotGoods[i].innerHTML = '';

            var pic = document.createElement('a');
            pic.classList.add('pic');
            var showvalue = document.createElement('span');
            showvalue.classList.add('showvalue');
            showvalue.classList.add(selectColor(hotData[i]));
            showvalue.textContent = hotData[i].wearName.slice(1, -1);
            pic.appendChild(showvalue);     // span.showvalue
        
            if (hotData[i].isStatTrak) {
                var count = document.createElement('span');
                count.classList.add('count');
                count.textContent = 'StatTrak™';
                pic.appendChild(count);     // span.count
            } else {}

            var tagrank = document.createElement('span');
            tagrank.classList.add('tagrank');
            tagrank.textContent = hotData[i].paintSeed;
            var info = document.createElement('div');
            info.classList.add('info');
            info.textContent = '图案模版(paint seed)';
            tagrank.appendChild(info);      // div.info
            pic.appendChild(tagrank);       // span.tagrank
        
            if (hotData[i].isPrinting) {
                if (hotData[i].printing1Url !== '') {
                    var printing1 = document.createElement('span');
                    printing1.classList.add('printing1');
                    var img1 = document.createElement('img');
                    img1.src = hotData[i].printing1Url;
                    printing1.appendChild(img1);    // img
                    pic.appendChild(printing1);     // span.printing1
                } else {}

                if (hotData[i].printing2Url !== '') {
                    var printing2 = document.createElement('span');
                    printing2.classList.add('printing2');
                    var img2 = document.createElement('img');
                    img2.src = hotData[i].printing2Url;
                    printing2.appendChild(img2);
                    pic.appendChild(printing2);     // span.printing2
                } else {}

                if (hotData[i].printing3Url !== '') {
                    var printing3 = document.createElement('span');
                    printing3.classList.add('printing3');
                    var img3 = document.createElement('img');
                    img3.src = hotData[i].printing3Url;
                    printing3.appendChild(img3);
                    pic.appendChild(printing3);     // span.printing3
                } else {}
            
                if (hotData[i].printing4Url !== '') {
                    var printing4 = document.createElement('span');
                    printing4.classList.add('printing4');
                    var img4 = document.createElement('img');
                    img4.src = hotData[i].printing4Url;
                    printing4.appendChild(img4);
                    pic.appendChild(printing4);     // span.printing4
                } else {}
            } else {}
        
            var goodImg = document.createElement('img');
            goodImg.src = hotData[i].imgurl;
            pic.appendChild(goodImg);       // img
        
            hotGoods[i].appendChild(pic);       // a.pic
        
            var wearbox = document.createElement('div');
            wearbox.classList.add('wear');
            var valuebox = document.createElement('div');
            valuebox.classList.add('value');
            valuebox.textContent = '磨损：' + hotData[i].wear;
            wearbox.appendChild(valuebox);      // div.value
        
            var point = document.createElement('div');
            point.classList.add('point');
            var pointicon = document.createElement('div');
            pointicon.classList.add('pointicon');
            pointicon.style.left = hotData[i].wearPercent;
            point.appendChild(pointicon);       // div.pointicon
            wearbox.appendChild(point);         // div.point
        
            var progressbar = document.createElement('div');
            progressbar.classList.add('progressbar');
        
            var newbox = document.createElement('div');
            newbox.classList.add('new');
            progressbar.appendChild(newbox);    // div.new
            var littlebox = document.createElement('div');
            littlebox.classList.add('little');
            progressbar.appendChild(littlebox);     // div.little
            var normalbox = document.createElement('div');
            normalbox.classList.add('normal');
            progressbar.appendChild(normalbox);     // div.normal
            var badbox = document.createElement('div');
            badbox.classList.add('bad');
            progressbar.appendChild(badbox);    // div.bad
            var oldbox = document.createElement('div');
            oldbox.classList.add('old');
            progressbar.appendChild(oldbox);    // div.old
        
            wearbox.appendChild(progressbar);   // div.progressbar
            hotGoods[i].appendChild(wearbox);   // div.wear
        
            var goodsdesc = document.createElement('h3');
            goodsdesc.classList.add('goodsdesc');
            var namebox = document.createElement('a');
            namebox.textContent = hotData[i].goodsName + hotData[i].wearName;
            goodsdesc.appendChild(namebox);     // a
            hotGoods[i].appendChild(goodsdesc);     // h3.goodsdesc
        
            var goodsprice = document.createElement('p');
            goodsprice.classList.add('goodsprice');
            goodsprice.textContent = '￥' + hotData[i].Price;
            hotGoods[i].appendChild(goodsprice);    // p.goodsprice
        }
    };

    // 封装二、三部分CS渲染函数
    function render(section, obj) {
        for (let k = 0; k < section.length; k++) {
            section[k].innerHTML = '';
            section[k].innerHTML = `<a href="#" class="pic">
                                        <img src="${obj[k].imgurl}" />
                                      </a>
                                      <h3 class="goodsdesc">
                                        <a href="#">${obj[k].goodsName}</a>
                                      </h3>
                                      <p class="goodsprice">
                                        ￥${obj[k].intPrice}
                                        <span class="small">${obj[k].floatPrice}</span>
                                      </p>`;
        }
    };

    // 封装渲染DOTA数据函数
    function renderDota(section, obj) {
        for (let j = 0; j < section.length; j++) {
            section[j].innerHTML = '';
            var pic = document.createElement('a');
            pic.classList.add('pic');

            var level = document.createElement('span');
            level.classList.add('level');
            if (obj[j].level === '普通') {
                level.classList.add('putong');
                level.textContent = obj[j].level;
            } else if (obj[j].level === '珍稀') {
                level.classList.add('zhenxi');
                level.textContent = obj[j].level;
            } else if (obj[j].level === '至宝') {
                level.classList.add('zhibao');
                level.textContent = obj[j].level;
            } else if (obj[j].level === '神话') {
                level.classList.add('shenhua');
                level.textContent = obj[j].level;
            } else if (obj[j].level === '不朽') {
                level.classList.add('buxiu');
                level.textContent = obj[j].level;
            } else if (obj[j].level === '传说') {
                level.classList.add('chuanshuo');
                level.textContent = obj[j].level;
            }
            pic.appendChild(level);     // span.level

            var imgbox = document.createElement('img');
            imgbox.style.position = 'relative';
            imgbox.style.margin = '0';
            imgbox.style.width = '206px';
            imgbox.src = obj[j].imgurl;
            pic.appendChild(imgbox);    // img
            section[j].appendChild(pic);    // a.pic

            var goodsdesc = document.createElement('h3');
            goodsdesc.classList.add('goodsdesc');
            var jumplink = document.createElement('a');
            jumplink.textContent = obj[j].goodsName;
            goodsdesc.appendChild(jumplink);    // a
            section[j].appendChild(goodsdesc);      // h3.goodsdesc

            var goodsprice = document.createElement('p');
            goodsprice.classList.add('goodsprice');
            goodsprice.textContent = '￥' + obj[j].intPrice;
            var small = document.createElement('span');
            small.classList.add('small');
            small.style.marginLeft = '0';
            small.textContent = obj[j].floatPrice;
            goodsprice.appendChild(small);      // span.small
            section[j].appendChild(goodsprice);     // p.goodsprice
        }
    };

    // 封装选中时的边框底色排他函数
    function expect(obj) {
        for (let i = 0; i < obj.length; i++) {
            obj[i].style.borderColor = 'transparent';
        }
    };

    // 封装选中时的字体颜色排他函数
    function expectColor(obj) {
        for (let i = 0; i < obj.length; i++) {
            obj[i].style.color = '#fff';
        }
    };

    // 封装导航栏切换时CS三个部分的同时渲染函数
    function renderAllCs() {
        CSRender();
        expect(section1Select);
        render(section2Goods, section2Data);
        expect(section2Select);
        render(section3Goods, section3Data);
        expect(section3Select);
    };

    // 封装导航栏切换时DOTA三个部分的同时渲染函数
    function renderAllDota() {
        renderDota(hotGoods, section1DotaData);
            expect(section1Select);
            renderDota(section2Goods, section2DotaData);
            expect(section2Select);
            renderDota(section3Goods, section3DotaData);
            expect(section3Select);
    };

    // 导出
    window.selectColor = selectColor;
    window.CSRender = CSRender;
    window.render = render;
    window.renderDota = renderDota;
    window.expect = expect;
    window.expectColor = expectColor;
    window.renderAllCs = renderAllCs;
    window.renderAllDota = renderAllDota;

})();
