/* 中华美食网 · 本地轻量搜索与页面增强（无依赖，file:// 可用） */
(function () {
    'use strict';

    var DATA = [
        { name: '鲁菜', tag: '菜系', kw: '鲁菜 山东 济南', url: 'html/lu/lu.html' },
        { name: '川菜', tag: '菜系', kw: '川菜 四川 成都', url: 'html/chuan/chuan.html' },
        { name: '粤菜', tag: '菜系', kw: '粤菜 广东 广州', url: 'html/yue/yue.html' },
        { name: '苏菜', tag: '菜系', kw: '苏菜 江苏 苏州 淮扬', url: 'html/su/su.html' },
        { name: '浙菜', tag: '菜系', kw: '浙菜 浙江 杭州', url: 'html/zhe/zhe.html' },
        { name: '湘菜', tag: '菜系', kw: '湘菜 湖南 长沙', url: 'html/xiang/xiang.html' },
        { name: '闽菜', tag: '菜系', kw: '闽菜 福建 福州 闽南', url: 'html/min/min.html' },
        { name: '徽菜', tag: '菜系', kw: '徽菜 安徽 徽州', url: 'html/hui/hui.html' },

        { name: '东坡肘子', tag: '川菜', kw: '东坡肘子 肘子 川菜 眉山', url: 'html/chuan/东坡肘子.html' },
        { name: '回锅肉', tag: '川菜', kw: '回锅肉 川菜 蒜苗', url: 'html/chuan/回锅肉.html' },
        { name: '毛血旺', tag: '川菜', kw: '毛血旺 川菜 重庆 鸭血 毛肚', url: 'html/chuan/毛血旺.html' },

        { name: '九转大肠', tag: '鲁菜', kw: '九转大肠 鲁菜 济南', url: 'html/lu/九转大肠.html' },
        { name: '海肠捞饭', tag: '鲁菜', kw: '海肠捞饭 鲁菜 胶东', url: 'html/lu/海肠捞饭.html' },
        { name: '油条拌黄瓜', tag: '鲁菜', kw: '油条拌黄瓜 鲁菜 凉菜', url: 'html/lu/油条拌黄瓜.html' },

        { name: '白切鸡', tag: '粤菜', kw: '白切鸡 粤菜 浸鸡', url: 'html/yue/白切鸡.html' },
        { name: '白灼大虾', tag: '粤菜', kw: '白灼大虾 粤菜 虾 灼', url: 'html/yue/白灼大虾.html' },
        { name: '虎皮凤爪', tag: '粤菜', kw: '虎皮凤爪 粤菜 早茶 凤爪', url: 'html/yue/虎皮凤爪.html' },

        { name: '松鼠桂鱼', tag: '苏菜', kw: '松鼠桂鱼 苏菜 苏州 桂鱼', url: 'html/su/松鼠桂鱼.html' },
        { name: '蟹粉狮子头', tag: '苏菜', kw: '蟹粉狮子头 苏菜 淮扬 狮子头', url: 'html/su/蟹粉狮子头.html' },
        { name: '叫花鸡', tag: '苏菜', kw: '叫花鸡 苏菜 常熟 煨鸡', url: 'html/su/叫花鸡.html' },

        { name: '东坡肉', tag: '浙菜', kw: '东坡肉 浙菜 杭州 红烧肉', url: 'html/zhe/东坡肉.html' },
        { name: '龙井虾仁', tag: '浙菜', kw: '龙井虾仁 浙菜 杭州 虾仁 龙井', url: 'html/zhe/龙井虾仁.html' },
        { name: '西湖醋鱼', tag: '浙菜', kw: '西湖醋鱼 浙菜 杭州 醋鱼', url: 'html/zhe/西湖醋鱼.html' },

        { name: '辣椒炒肉', tag: '湘菜', kw: '辣椒炒肉 湘菜 湖南', url: 'html/xiang/辣椒炒肉.html' },
        { name: '金钱蛋', tag: '湘菜', kw: '金钱蛋 湘菜 湖南 鸡蛋', url: 'html/xiang/金钱蛋.html' },
        { name: '擂辣椒皮蛋', tag: '湘菜', kw: '擂辣椒皮蛋 湘菜 湖南 皮蛋', url: 'html/xiang/擂辣椒皮蛋.html' },

        { name: '荔枝肉', tag: '闽菜', kw: '荔枝肉 闽菜 福州 荔枝', url: 'html/min/荔枝肉.html' },
        { name: '海蛎煎', tag: '闽菜', kw: '海蛎煎 闽菜 厦门 海蛎 蚝仔煎', url: 'html/min/海蛎煎.html' },
        { name: '姜母鸭', tag: '闽菜', kw: '姜母鸭 闽菜 厦门 泉州 姜母', url: 'html/min/姜母鸭.html' },

        { name: '臭鳜鱼', tag: '徽菜', kw: '臭鳜鱼 徽菜 徽州 鳜鱼', url: 'html/hui/臭鳜鱼.html' },
        { name: '刀板香', tag: '徽菜', kw: '刀板香 徽菜 咸肉 冬笋', url: 'html/hui/刀板香.html' },
        { name: '问政山笋', tag: '徽菜', kw: '问政山笋 徽菜 春笋 火腿', url: 'html/hui/问政山笋.html' }
    ];

    /* 计算站点根目录（兼容 http 与 file://）*/
    function getRoot() {
        try {
            var sc = document.currentScript;
            if (sc && sc.src) {
                var idx = sc.src.lastIndexOf('/js/site.js');
                if (idx > -1) {
                    return sc.src.substring(0, idx + 1);
                }
            }
            var scripts = document.getElementsByTagName('script');
            for (var i = scripts.length - 1; i >= 0; i--) {
                var src = scripts[i].src || scripts[i].getAttribute('src') || '';
                var hit = src.lastIndexOf('/js/site.js');
                if (hit > -1) {
                    return src.substring(0, hit + 1);
                }
            }
        } catch (e) { /* 继续走路径回退 */ }

        var p = location.pathname.replace(/\\/g, '/');
        var mark = p.indexOf('/html/');
        if (mark > -1) {
            return p.substring(0, mark + 1);
        }
        return p.substring(0, p.lastIndexOf('/') + 1);
    }

    var rootUrl = getRoot();
    var form = document.getElementById('topform');
    if (!form) {
        return;
    }

    /*  定位文本输入框*/
    var inputs = form.querySelectorAll('input');
    var searchInput = null;
    for (var n = 0; n < inputs.length; n++) {
        var t = (inputs[n].getAttribute('type') || 'text').toLowerCase();
        if (t !== 'submit' && t !== 'button' && t !== 'reset') {
            searchInput = inputs[n];
            break;
        }
    }
    if (!searchInput) {
        return;
    }

    /*  构造建议容器（包住输入框，不改动原有元素）*/
    var wrap = document.createElement('span');
    wrap.className = 'search-box';
    searchInput.parentNode.insertBefore(wrap, searchInput);
    wrap.appendChild(searchInput);

    var listBox = document.createElement('div');
    listBox.className = 'search-suggest';
    wrap.appendChild(listBox);

    var tipBox = document.createElement('div');
    tipBox.className = 'search-tip';
    tipBox.style.display = 'none';
    wrap.appendChild(tipBox);

    var tipTimer = null;

    function findMatches(q) {
        q = (q || '').trim().toLowerCase();
        if (!q) {
            return [];
        }
        var out = [];
        for (var i = 0; i < DATA.length && out.length < 8; i++) {
            var item = DATA[i];
            var hay = (item.name + ' ' + item.tag + ' ' + item.kw).toLowerCase();
            if (hay.indexOf(q) > -1) {
                out.push(item);
            }
        }
        return out;
    }

    function hideTip() {
        if (tipTimer) {
            clearTimeout(tipTimer);
            tipTimer = null;
        }
        tipBox.style.display = 'none';
    }

    function showTip(msg) {
        hideTip();
        tipBox.textContent = msg;
        tipBox.style.display = 'block';
        tipTimer = setTimeout(hideTip, 2500);
    }

    function closeList() {
        listBox.classList.remove('open');
        listBox.innerHTML = '';
    }

    function goTo(item) {
        window.location.href = rootUrl + item.url;
    }

    function renderList(q) {
        var items = findMatches(q);
        listBox.innerHTML = '';
        if (!items.length) {
            closeList();
            return;
        }
        for (var i = 0; i < items.length; i++) {
            (function (item) {
                var a = document.createElement('a');
                a.href = rootUrl + item.url;
                a.textContent = item.name + '（' + item.tag + '）';
                a.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    goTo(item);
                });
                listBox.appendChild(a);
            })(items[i]);
        }
        listBox.classList.add('open');
    }

    function setActive(step) {
        var links = listBox.querySelectorAll('a');
        if (!links.length) {
            return;
        }
        var cur = -1;
        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('active')) {
                cur = i;
                links[i].classList.remove('active');
            }
        }
        cur = (cur + step + links.length) % links.length;
        links[cur].classList.add('active');
        links[cur].scrollIntoView({ block: 'nearest' });
    }

    function commit() {
        var active = listBox.querySelector('a.active');
        if (active) {
            active.click();
            return;
        }
        var items = findMatches(searchInput.value);
        if (items.length) {
            goTo(items[0]);
        } else {
            showTip('未找到相关菜品/菜系');
        }
    }

    searchInput.addEventListener('input', function () {
        hideTip();
        renderList(searchInput.value);
    });

    searchInput.addEventListener('focus', function () {
        renderList(searchInput.value);
    });

    searchInput.addEventListener('keydown', function (ev) {
        if (ev.key === 'ArrowDown') {
            ev.preventDefault();
            setActive(1);
        } else if (ev.key === 'ArrowUp') {
            ev.preventDefault();
            setActive(-1);
        } else if (ev.key === 'Enter') {
            ev.preventDefault();
            commit();
        } else if (ev.key === 'Escape') {
            closeList();
            hideTip();
        }
    });

    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        commit();
    });

    document.addEventListener('click', function (ev) {
        if (!wrap.contains(ev.target)) {
            closeList();
            hideTip();
        }
    });
})();
