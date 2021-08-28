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

                //array di risposte possibili
                let possibleReply = ['Ok', 'Non mi va ', 'Forse', 'Certamente'];
                let randomReply = '';
                let randomIndex = Math.floor(Math.random() * ((possibleReply.length - 1) + 1));


                //alla vecchia maniera per non dimenticare il for tradizionale
                for (let i = 0; i < possibleReply.length; i++) {
                    randomReply = possibleReply[randomIndex]
                }

                let replyMessage = {
                    date: this.today.format('DD/MM/YYYY HH:mm:ss'),
                    message: randomReply,
                    status: 'received'

                };

                this.contacts[ind].messages.push(replyMessage);
            }, 2000)

        }
    }

})