<template>
	<div id="app">
		<img src="./assets/logo.png">
        <router-view/>
	</div>
</template>

<script>
const HOT_NAME = "❤";
const HOT_USER_LEN = 10;
export default {
    name: "App",
    created() {
        this.Get_Perosn_List();
    },
    methods: {
        Get_Perosn_List() {
            $.getJSON("static/json/person.json", res => {
                const data = res.map(ele => {
                    const newData = Object.assign(ele, {
                        user_index:
                            typeof ele.username === "string" &&
                            ele.username.charAt(0).toPinYin()
                    });
                    return newData;
                });
                const map = {
                    hot: {
                        title: HOT_NAME,
                        list: []
                    }
                };
                data.forEach((item, index) => {
                    if (index < HOT_USER_LEN) {
                        map.hot.list.push({
                            username: item.username,
                            user_index: item.user_index
                        });
                    }
                    const KEY = item.user_index;
                    if (!map[KEY]) {
                        map[KEY] = {
                            title: KEY,
                            list: []
                        };
                    }
                    map[KEY].list.push({
                        username: item.username,
                        user_index: item.user_index
                    });
                });
                let hot = [];
                let ret = [];
                for (let key in map) {
                    let val = map[key];
                    if (val.title.match(/[a-zA-Z]/)) {
                        ret.push(val);
                    } else if (val.title === HOT_NAME) {
                        hot.push(val);
                    }
                }
                ret.sort(
                    (a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)
                );
                const list = hot.concat(ret);
                console.log(list);
                this.$store.dispatch("Contact_List", list);
            });
        }
    }
};
</script>

<style lang="stylus">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 0.2rem;

    a {
        text-decoration: underline;
    }

    p {
        margin-bottom: 0.25rem;
    }
}
</style>
