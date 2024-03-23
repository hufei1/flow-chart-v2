<template>
    <div>
        <div class="flow-chart" ref="flowChart">
            <div class="flow-chart__list">
                <div class="flow-chart__list__item" :style="calculate(index)" @click="clickItem(item)"
                    v-for="(item, index) in chartList" :key="item[chartKeyField]">
                    <div class="flow-chart__list__item__inner">
                        <div class="flow-chart__list__item__text">{{ item[chartNameField] }}</div>
                        <div class="flow-chart__list__item__arrow flow-chart__list__item__arrow--left"
                            v-if="calIshowLeft(index)"></div>
                        <div class="flow-chart__list__item__arrow flow-chart__list__item__arrow--right"
                            v-if="calIshowRight(index)"></div>
                        <div class="flow-chart__list__item__arrow flow-chart__list__item__arrow--down"
                            v-if="calIshowDown(index)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'flow-chart',
    props: {
        chartList: {
            required:true,
            type: Array,
            default: () => ([])
        },
        chartNameField: {
            type: String,
            default: '',
            required: true
        },
        chartKeyField: {
            type: String,
            default: 'id',
            required: true
        },
        colunmNum: {
            type: Number,
            default: 5
        }
    },
    mounted() {
    },
    methods: {
        calculate(index) {
            const row = Math.ceil((index + 1) / this.colunmNum)
            let paddingLeft = ''
            if (row % 2 === 0) {
                // 偶数行最后一列没有间距
                paddingLeft = index % this.colunmNum === this.colunmNum - 1 ? '0' : '20px'
            } else {
                // 奇数行第一列没有间距
                paddingLeft = index % this.colunmNum === 0 ? '0' : '20px'
            }
            return {
                paddingLeft,
                width: `${100 / this.colunmNum}%`,
                float: Math.ceil((index + 1) / this.colunmNum) % 2 !== 0 ? 'left' : 'right'
            }
        },
        calIshowLeft(index) {
            // 最后一个不显示
            if (index === this.chartList.length - 1) return false
            // 奇数行不是最后一个显示
            const row = Math.ceil((index + 1) / this.colunmNum)
            return row % 2 !== 0 && (index + 1) % this.colunmNum !== 0
        },
        calIshowRight(index) {
            // 最后一个不显示
            if (index === this.chartList.length - 1) return false
            // 偶数行不是第一个显示
            const row = Math.ceil((index + 1) / this.colunmNum)
            return row % 2 === 0 && (index + 1) % this.colunmNum !== 0
        },
        calIshowDown(index) {
            const row = Math.ceil((index + 1) / this.colunmNum)
            // 最后一行没有
            if (row === this.chartList.length / this.colunmNum) return false

            if (row % 2 === 0) {
                // 偶数行第一列显示
                return (index + 1) % this.colunmNum === 0
            } else {
                // 奇数行最后一列显示
                return (index + 1) % this.colunmNum === 0
            }
        },
        clickItem(item) {
            this.$emit('clickItem', item)
        },
    }
}
</script>

<style lang="scss" scoped>
$listHeight: 40px;
$arrowWidth: 20px;
$arrowBorderWidth: 7px;

.flow-chart {
    width: 100%;
    overflow: hidden;

    &__list {
        &__item {
            position: relative;
            height: $listHeight;
            margin-bottom: $arrowWidth;
            cursor: pointer;
            padding-left: 20px;
            box-sizing: border-box;

            &__inner {
                width: auto;
                height: 100%;
                border: 2px solid #333;
            }

            &__text {
                padding: 5px;
                box-sizing: border-box;
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                text-overflow: ellipsis;
            }

            &__arrow {
                position: absolute;
                left: 0;
                top: calc($listHeight/2);
                width: $arrowWidth;

                &--left {
                    left: 100%;
                    transform: rotate(180deg);
                }

                &--right {
                    left: 0;
                }

                &--down {
                    left: 50%;
                    top: 100%;
                    transform-origin: 100% 0;
                    transform: translate(-50%) rotate(-90deg);
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 100%;
                    /* 调整箭头横线的长度 */
                    height: 2px;
                    /* 调整箭头横线的粗细 */
                    background-color: black;
                    /* 调整箭头横线的颜色 */
                    transform: translateY(-50%);
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: -$arrowBorderWidth;
                    border-style: solid;
                    border-width: $arrowBorderWidth;
                    /* 调整箭头三角形的大小 */
                    border-color: transparent black transparent transparent;
                    /* 控制箭头三角形的颜色和方向 */
                    transform: translateY(-50%);
                }
            }
        }
    }
}
</style>