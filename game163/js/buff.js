// TodoList:
// 轮播图的li在mouseon的时候就变化
// 变化时对应切换图片和文字
// 自动播放

document.addEventListener('DOMContentLoaded', function() {
    // 轮播图信息数组
    var carouselData = [
        {
            header: '哥本哈根Major印花',
            paragraph: '现已开放交易',
        },
        {
            header: '热门CSGO饰品',
            paragraph: '好货推荐跟着买就对了',
        },
        {
            header: 'BUFF移动端APP',
            paragraph: '随时随地便捷交易快人一步',
        },
        {
            header: '交易防骗指南',
            paragraph: '务必阅读',
        },
        {
            header: '画加APP',
            paragraph: '简单便捷定制你的玩家秀',
        },
        {
            header: 'MuMu模拟器Pro',
            paragraph: 'M芯片Mac专属模拟器正式上线！',
        },
        {
            header: 'UU加速器iOS/安卓',
            paragraph: '免费加速 交易访问问题',
        }
    ];

    // 获取元素
    var carouselTitle = document.getElementById('carouselTitle');
    var carouselDesc = document.getElementById('carouselDesc');
    var imgContent = document.getElementById('imgContent').children;
    var lis = document.getElementById('rollbar').children;
    // console.log(lis);
    var currentIndex = 0;
    var timer = null;

    // 封装自动播放函数
    function autoPlay() {
        timer = setInterval(function() {
            // 切换过程自动点亮
            for (let i = 0; i < lis.length; i++) {
                // 此处为排他
                lis[i].classList.remove('cur');
            }
            lis[currentIndex].classList.add('cur');

            // 图的切换
            for (let j = 0; j < imgContent.length; j++) {
                // 此处为排他
                imgContent[j].classList.remove('cur');
            }
            imgContent[currentIndex].classList.add('cur');

            // 文字渲染
            carouselTitle.innerHTML = carouselData[currentIndex].header;
            carouselDesc.innerHTML = carouselData[currentIndex].paragraph;

            // index+1
            currentIndex = (currentIndex + 1) % lis.length;

        }, 2500);
    }

    // 鼠标移到长条上时就切换(并且清除定时器)
    function hoverChange() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseover', function() {
                // console.log('yes');
                if (timer) {
                    clearInterval(timer);
                }
                
                // hover时改变文字内容
                carouselTitle.innerHTML = carouselData[i].header;
                carouselDesc.innerHTML = carouselData[i].paragraph;
                
                // hover时改变选中长条
                for (let k = 0; k < lis.length; k++) {
                    lis[k].classList.remove('cur');
                }
                lis[i].classList.add('cur');

                // hover时改变图
                for (let j = 0; j < imgContent.length; j++) {
                    imgContent[j].classList.remove('cur');
                }
                imgContent[i].classList.add('cur');

                currentIndex = i;
            });

            // 鼠标离开时
            lis[i].addEventListener('mouseout', function() {
                autoPlay();
            });
        }
    }


    // 初始默认选中第一条
    carouselTitle.innerHTML = carouselData[0].header;
    carouselDesc.innerHTML = carouselData[0].paragraph;
    imgContent[0].classList.add('cur');
    lis[0].classList.add('cur');

    autoPlay();
    
    hoverChange();
});
