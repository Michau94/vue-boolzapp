console.log('js ok');
console.log(user);
console.log(contacts);

dayjs.extend(dayjs_plugin_customParseFormat);


const root = new Vue({
    el: "#root",
    data: {
        user,
        contacts,
        search: '',
        message: '',
        today: dayjs()


    },
    methods: {}
})