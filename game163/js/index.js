document.addEventListener('DOMContentLoaded', function() {
    // 游戏列表展开功能
    var topNavi = document.getElementById('topNavi');
    var topNaviInfo = document.getElementById('topNaviInfo');
    var naviBtn = document.getElementById('naviBtn');

    var flag = true;
    // 点击时展开(再次点击关闭)
    topNavi.addEventListener('click', function() {
        if (flag) {
            topNavi.style.backgroundColor = '#282b2d';
            topNavi.innerHTML = '';
            var div = document.createElement('div');
            div.classList.add('changeafter');
            topNavi.appendChild(div);
            // topNaviInfo.style.display = 'block';
            topNaviInfo.style.opacity = '1';
            topNaviInfo.style.height = '855px';
            topNaviInfo.style.zIndex = '999';
        } else {
            topNavi.style.backgroundColor = '#cf1132';
            topNavi.innerHTML = '<div class="change"></div> <span>游戏列表</span>';
            // topNaviInfo.style.display = 'none';
            topNaviInfo.style.opacity = '0';
            topNaviInfo.style.height = '0';
            topNaviInfo.style.zIndex = '-1';
        }
        flag = !flag;
    });

    // 点击收齐button关闭
    naviBtn.addEventListener('click', function() {
        topNavi.style.backgroundColor = '#cf1132';
            topNavi.innerHTML = '<div class="change"></div> <span>游戏列表</span>';
            topNaviInfo.style.opacity = '0';
            topNaviInfo.style.height = '0';
            topNaviInfo.style.zIndex = '-1';
            flag = true;
    });

    // 查看更多的功能
    // 修改最外面的大盒子挤页面 修改子层级的为了边框和挤下面的按钮 修改手游盒子为了显示
    // 修改三个盒子的大小
    var boxFlag = true;
    var morebtn = document.getElementById('morebtn');
    var gameListBox = document.getElementById('gameListBox');
    var gameList = document.getElementById('gameList');
    var mobileGame = document.getElementById('mobileGame');

    morebtn.addEventListener('click', function() {
        if (boxFlag) {
            gameListBox.style.height = '815px';
            gameList.style.height = '685px';
            mobileGame.style.height = '685px';
            morebtn.innerHTML = '收起';
        } else {
            gameListBox.style.height = '615px';
            gameList.style.height = '485px';
            mobileGame.style.height = '485px';
            morebtn.innerHTML = '查看更多';
        }
        boxFlag = !boxFlag;
    })

    // 信息盒子选择显示对应图 (修改对应Tab样式)
    var boxImgs = document.getElementsByClassName('boxImg');
    var tabs = document.getElementsByClassName('tab');
    // 默认选中1
    tabs[0].classList.add('choose');
    

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            // 排他(选图)
            for (let j = 0; j < boxImgs.length; j++) {
                boxImgs[j].style.opacity = '0';
            }
            boxImgs[i].style.opacity = '1';
            // 排他(tab样式)
            for (let k = 0; k < tabs.length; k++) {
                tabs[k].classList.remove('choose');
                this.classList.add('choose');
            }
            
        });
    }

    // 背景轮播图
    var topBox = document.getElementById('topBox');
    var leftBtn = document.getElementById('leftBtn');
    var rightBtn = document.getElementById('rightBtn');
    // 圆点
    var points = document.getElementsByClassName('point');
    // 信息栏
    var prevInfo = document.getElementById('prevInfo');
    var nextInfo = document.getElementById('nextInfo');
    // 信息盒子
    var infoBox = document.getElementById('infoBox');

    var bgImgs = ['url("assets/headbg1.jpg")', 'url("assets/headbg2.jpg")', 'url("assets/headbg3.jpg")', 'url("assets/headbg4.jpg")', 'url("assets/headbg5.jpg")',];
    var infos = [
        {
            head1: '一梦江湖',
            head2: '江湖"七夕节"甜蜜开启',
            paragraph: '史上最佳入坑版本，新门派大巫绝美现世！上线就送稀世青发、绝世悠游、绝美坐骑，基金重置来袭，35套永久心愿时装任君选择！新地图、新主线、全服大事件开启，新赛季经典副本回归！'
        },
        {
            head1: '《光·遇》缤纷飞行日',
            head2: '友聚彩虹，共绘缤纷',
            paragraph: '《光·遇》缤纷飞行日8月14日开启！缤纷虹光装点云端，彩色尾迹闪耀赛道，快来体验染发魔法的奇趣，与好友一起合照定格绚丽时刻。千人共聚彩虹下，一起描绘多彩回忆！'
        },
        {
            head1: '狼人杀全新六星时装上线',
            head2: '洛水惊梦 仙影临尘',
            paragraph: '浮长川而忘返，思绵绵而增慕。洛水邂逅，情缘至深，人神道殊又如何？狼人杀全新六星时装和专属特效上线，快来呼唤你的誓约开启双人特效吧！'
        },
        {
            head1: '猪猪侠七夕与你缘定三界',
            head2: '男神登场共享浪漫甜蜜',
            paragraph: '新倩女幽魂趣味联动童年男神猪猪侠！GGBOND联名外观、坐骑等超多趣味内容来袭，一起陪你欢乐过七夕！超华丽双形态婚服永久时装同步上线，为你七夕浪漫加倍！'
        },
        {
            head1: '全新时装·鸾凤和鸣上线',
            head2: '银汉迢迢 鸾凤偕飞',
            paragraph: '全新七夕主题时装【鸾凤和鸣】正式上线！银汉迢迢，鸾凤偕飞。鹊桥牵红线，锦书传佳音。瑶台鸾影翩，碧落凤声旋。佳期如梦金风起，良宵美景共婵娟。'
        }
    ];
    var smallInfos = [
        {
            img: 'assets/headbg1.jpg',
            title: '一梦江湖',
            desc: '江湖“七夕节”甜蜜开启'
        },
        {
            img: 'assets/headbg2.jpg',
            title: '《光·遇》缤纷飞行日',
            desc: '友聚彩虹，共绘缤纷'
        },
        {
            img: 'assets/headbg3.jpg',
            title: '狼人杀全新六星时装上线',
            desc: '洛水惊梦 仙影临尘'
        },
        {
            img: 'assets/headbg4.jpg',
            title: '猪猪侠七夕与你缘定三界',
            desc: '男神登场共享浪漫甜蜜'
        },
        {
            img: 'assets/headbg5.jpg',
            title: '全新时装·鸾凤和鸣上线',
            desc: '银汉迢迢 鸾凤偕飞'
        },
    ];

    // 自动切换
    var timer;
    var currentIndex = 0;
    points[0].classList.add('cur');
    infoBox.style.top = '248px';
    infoBox.style.left = '212px';
    infoBox.innerHTML = `<h2>${infos[0].head1}</h2>
                                <h3>${infos[0].head2}</h3>
                                <p>${infos[0].paragraph}</p>
                                <a href="#"><span></span></a>`;
    prevInfo.innerHTML = `<span>
                        <img src="${smallInfos[smallInfos.length - 1].img}" style="width: 80px; height: 60px;"/>
                        </span>
                        <div style="display: inline-block; height: 60px; line-height: 36px;">
                        <h2 style="color: #fff; font-size: 13px">${smallInfos[smallInfos.length - 1].title}</h2>
                        <p style="color: #fff; font-size: 13px">${smallInfos[smallInfos.length - 1].desc}</p>
                        </div>`;
    nextInfo.innerHTML = `<span>
                        <img src="${smallInfos[currentIndex + 1].img}" style="width: 80px; height: 60px;"/>
                        </span>
                        <div style="display: inline-block; height: 60px; line-height: 36px;">
                        <h2 style="color: #fff; font-size: 13px">${smallInfos[currentIndex + 1].title}</h2>
                        <p style="color: #fff; font-size: 13px">${smallInfos[currentIndex + 1].desc}</p>
                        </div>`;
    
    // 自动轮播封装函数
    function autoPlay() {
        timer = setInterval(function() {
            // 切换过程中 自动点亮小圆点
            for (let j = 0; j < points.length; j++) {
                points[j].classList.remove('cur');
            }
            points[currentIndex].classList.add('cur');
            topBox.style.backgroundImage = bgImgs[currentIndex];

            descBox();

            // index加1
            currentIndex = (currentIndex + 1) % bgImgs.length;
        }, 3000);
    }

    // 渲染信息小盒子函数
    function descBox() {
        if (currentIndex === 0) {
            prevInfo.innerHTML = `<span>
                                <img src="${smallInfos[bgImgs.length - 1].img}" style="width: 80px; height: 60px;"/>
                                </span>
                                <div style="display: inline-block; height: 60px; line-height: 36px;">
                                <h2 style="color: #fff; font-size: 13px">${smallInfos[bgImgs.length - 1].title}</h2>
                                <p style="color: #fff; font-size: 13px">${smallInfos[bgImgs.length - 1].desc}</p>
                                </div>`;
            nextInfo.innerHTML = `<span>
                                <img src="${smallInfos[currentIndex + 1].img}" style="width: 80px; height: 60px;"/>
                                </span>
                                <div style="display: inline-block; height: 60px; line-height: 36px;">
                                <h2 style="color: #fff; font-size: 13px">${smallInfos[currentIndex + 1].title}</h2>
                                <p style="color: #fff; font-size: 13px">${smallInfos[currentIndex + 1].desc}</p>
                                </div>`;
        } else {
            prevInfo.innerHTML = `<span>
                                <img src="${smallInfos[currentIndex % bgImgs.length - 1].img}" style="width: 80px; height: 60px;"/>
                                </span>
                                <div style="display: inline-block; height: 60px; line-height: 36px;">
                                <h2 style="color: #fff; font-size: 13px">${smallInfos[currentIndex % bgImgs.length - 1].title}</h2>
                                <p style="color: #fff; font-size: 13px">${smallInfos[currentIndex % bgImgs.length - 1].desc}</p>
                                </div>`;
            nextInfo.innerHTML = `<span>
                                <img src="${smallInfos[(currentIndex + 1) % bgImgs.length].img}" style="width: 80px; height: 60px;"/>
                                </span>
                                <div style="display: inline-block; height: 60px; line-height: 36px;">
                                <h2 style="color: #fff; font-size: 13px">${smallInfos[(currentIndex + 1) % bgImgs.length].title}</h2>
                                <p style="color: #fff; font-size: 13px">${smallInfos[(currentIndex + 1) % bgImgs.length].desc}</p>
                                </div>`;
        }
        if (currentIndex === 3) {
            infoBox.style.top = '248px';
            infoBox.style.left = '1100px';
            infoBox.innerHTML = `<h2>${infos[currentIndex].head1}</h2>
                            <h3>${infos[currentIndex].head2}</h3>
                            <p>${infos[currentIndex].paragraph}</p>
                            <a href="#"><span></span></a>`;
        } else {
            infoBox.style.top = '248px';
            infoBox.style.left = '212px';
            infoBox.innerHTML = `<h2>${infos[currentIndex].head1}</h2>
                            <h3>${infos[currentIndex].head2}</h3>
                            <p>${infos[currentIndex].paragraph}</p>
                            <a href="#"><span></span></a>`;
        }
    }
    
    autoPlay();

    // 点击小圆点切换对应的图
    for (let i = 0; i < points.length; i++) {
        points[i].addEventListener('click', function() {
            // console.log(i);
            if (timer) {
                clearInterval(timer);
            }
            currentIndex = i;
            descBox();
            for (let j = 0; j < points.length; j++) {
                points[j].classList.remove('cur');
            }
            points[i].classList.add('cur');
            topBox.style.backgroundImage = bgImgs[i];
            if (i === 3) {
                infoBox.style.top = '248px';
                infoBox.style.left = '1100px';
                infoBox.innerHTML = `<h2>${infos[i].head1}</h2>
                                <h3>${infos[i].head2}</h3>
                                <p>${infos[i].paragraph}</p>
                                <a href="#"><span></span></a>`;
            } else {
                infoBox.style.top = '248px';
                infoBox.style.left = '212px';
                infoBox.innerHTML = `<h2>${infos[i].head1}</h2>
                                <h3>${infos[i].head2}</h3>
                                <p>${infos[i].paragraph}</p>
                                <a href="#"><span></span></a>`;
            }
            
            autoPlay();
        });
    }

    // 点击按钮切换前后图
    leftBtn.addEventListener('click', function() {
        if (timer) {
            clearInterval(timer);
        }
        // 取得前一个
        if (currentIndex === 0) {
            currentIndex = 4;
        } else {
            currentIndex = currentIndex - 1;
        }
        // 小圆点
        for (let j = 0; j < points.length; j++) {
            points[j].classList.remove('cur');
        }
        points[currentIndex].classList.add('cur');
        // 图
        topBox.style.backgroundImage = bgImgs[currentIndex];
        // 信息盒子
        descBox();

        autoPlay();
    });
    rightBtn.addEventListener('click', function() {
        if (timer) {
            clearInterval(timer);
        }
        // 取得第一个
        if (currentIndex === 4) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        // 小圆点
        for (let j = 0; j < points.length; j++) {
            points[j].classList.remove('cur');
        }
        points[currentIndex].classList.add('cur');
        // 图
        topBox.style.backgroundImage = bgImgs[currentIndex];
        // 信息盒子
        descBox();

        autoPlay();
    });
    
})
