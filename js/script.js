console.log('js ok');
console.log(user);
console.log(contacts);

dayjs.extend(dayjs_plugin_customParseFormat);
const mainChat = document.getElementById('mainChat');


const root = new Vue({
    el: "#root",
    data: {
        user,
        contacts,
        search: '',
        message: '',
        today: dayjs(),
        currentUser: 'Michele',
        currentAvatar: '_1'



    },
    methods: {
        show(friendName) {

            const updName = friendName.toLowerCase();

            if (this.search.trim() === '' || !this.search) {
                return true;
            }

            return updName.includes(this.search.trim().toLowerCase()) ? true : false;
        },

        actualUser(user) {
            this.currentUser = user.name;
            this.currentAvatar = user.avatar;

        }

    }
})