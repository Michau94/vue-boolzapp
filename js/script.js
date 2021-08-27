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
        today: dayjs(),
        currentUser: 'Michele',
        currentAvatar: '_1',
        currentIndex: 0,



    },
    methods: {
        showFriend(friendName) {

            const updName = friendName.toLowerCase();

            if (this.search.trim() === '' || !this.search) {
                return true;
            }

            return updName.includes(this.search.trim().toLowerCase()) ? true : false;
        },

        actualUser(user, index) {
            this.currentUser = user.name;
            this.currentAvatar = user.avatar;
            this.currentIndex = index;

        },
        newMessage(ind) {

            let newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.message,
                status: 'sent'

            };

            this.contacts[ind].messages.push(newMessage);

            this.message = " ";

            setTimeout(() => {

                let replyMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'OK',
                    status: 'received'

                };

                this.contacts[ind].messages.push(replyMessage);
            }, 2000)

        }
    }

})