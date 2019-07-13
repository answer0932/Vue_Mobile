<template>
    <Scroller :data="Contact_List" ref="listview" :listenScroll="listenScroll" :probeType="probeType" @scroll="scroll" id="listview">
       <div>
            <dl v-for="(item, index) in Contact_List" :key="index" ref="listGroup">
                <dt>{{item.title}}</dt>
                <dd v-for="(items, index) in item.list" :key="index">
                    {{items.username}}
                </dd>
            </dl>
       </div>
        <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
                <ul>
                    <li class="item" v-for="(item, index) in Contact_List" :key="index" :class="{'active': currentIndex === index}" :data-index="index">{{item.title}}</li>
                </ul>
             </div>
            <div class="list-fixed" ref="fixed" v-show="fixedTitle">
                <h1 class="fixed-title">{{fixedTitle}}</h1>
            </div>
    </Scroller>
</template>

<script>
import Scroller from "@/components/Scroller";

const ANCHOR_HEIGHT = 18;
// fixed 的高度
const TITLE_HEIGHT = 30;
export default {
    components: {
        Scroller
    },
    data() {
        return {
            scrollY: -1,
            currentIndex: 0,
            diff: -1
        };
    },
    created() {
        this.touch = {};
        this.listenScroll = true;
        this.listHeight = [];
        this.probeType = 3;
    },
    computed: {
        Contact_List() {
            return this.$store.getters.ContactList;
        },
        fixedTitle() {
            if (this.scrollY > 0) {
                return "";
            }
            return this.Contact_List[this.currentIndex]
                ? this.Contact_List[this.currentIndex].title
                : "";
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this._calculateHeight();
            }, 20);
        },
        scrollY(newY) {
            const listHeight = this.listHeight;
            // 当滚动到顶部，newY>0
            if (newY > 0) {
                this.currentIndex = 0;
                return;
            }
            // 在中间部分滚动
            for (let i = 0; i < listHeight.length - 1; i++) {
                let height1 = listHeight[i];
                let height2 = listHeight[i + 1];
                if (-newY >= height1 && -newY < height2) {
                    this.currentIndex = i;
                    this.diff = height2 + newY;
                    return;
                }
            }
            // 当滚动到底部，且-newY大于最后一个元素的上限
            this.currentIndex = listHeight.length - 2;
        },
        diff(newVal) {
            let fixedTop =
                newVal > 0 && newVal < TITLE_HEIGHT ? newVal - TITLE_HEIGHT : 0;
            if (this.fixedTop === fixedTop) {
                return;
            }
            this.fixedTop = fixedTop;
            this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`;
        }
    },
    methods: {
        selectItem(item) {
            this.$emit("select", item);
        },
        _scrollTo(index) {
            if (!index && index !== 0) {
                return;
            }
            if (index < 0) {
                index = 0;
            } else if (index > this.listHeight - 2) {
                index = this.listHeight - 2;
            }
            this.scrollY = -this.listHeight[index];
            this.$refs.listview.scrollToElement(
                this.$refs.listGroup[index],
                100
            );
        },
        onShortcutTouchMove(e) {
            let firstTouch = e.touches[0];
            this.touch.y2 = firstTouch.pageY;
            let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0;
            let anchorIndex = parseInt(this.touch.anchorIndex) + delta;
            this._scrollTo(anchorIndex);
        },
        onShortcutTouchStart(e) {
            let anchorIndex = this.getData(e.target, "index");
            let firstTouch = e.touches[0];
            this.touch.y1 = firstTouch.pageY;
            this.touch.anchorIndex = anchorIndex;
            this._scrollTo(anchorIndex);
        },
        getData(el, name, val) {
            const prefix = "data-";
            name = prefix + name;
            if (val) {
                return el.serAttribute(name, val);
            } else {
                return el.getAttribute(name);
            }
        },
        refresh() {
            this.$refs.listview.refresh();
        },
        scroll(pos) {
            this.scrollY = pos.y;
        },
        // 初始化根据数据来计算每一个list的区间高度
        _calculateHeight() {
            this.listHeight = [];
            const list = this.$refs.listGroup;
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        }
    }
};
</script>

<style lang="stylus" >
#listview {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.8);
    top: 0;

    dt {
        height: 25px;
        line-height: 25px;
        text-align: left;
        text-indent: 20px;
        background-color: #ddd;
        opacity: 0.8;
    }

    dd {
        height: 40px;
        line-height: 40px;
        color: #fff;
    }

    .list-shortcut {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        z-index: 10;
        background-color: #ddd;
        transform: translate(0, 50%);

        li {
            height: 15px;
            line-height: 15px;

            &.active {
                color: purple;
                font-weight: bolder;
            }
        }
    }

    .list-fixed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 25px;
        line-height: 25px;
        background-color: orange;
        color: #fff;
    }
}
</style>
