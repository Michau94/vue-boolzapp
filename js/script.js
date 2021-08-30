console.log('js ok');

dayjs.extend(dayjs_plugin_customParseFormat);


const root = new Vue({
    el: "#root",
    data: {
        data,
        user: data.user,
        contacts: data.contacts,
        search: '',
        message: '',
        today: dayjs(),
        currentUser: 'Michele',
        currentAvatar: '_1',
        currentIndex: 0,



    },
    methods: {
        showFriend(contact) {
            contact.name.toLowerCase().includes(this.search.toLowerCase()) ? contact.visible = true : contact.visible = false;

            return contact.visible;
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

            if (newMessage.message.trim() !== '' || newMessage.message.trim()) {
                this.contacts[ind].messages.push(newMessage);
                this.message = "";

                this.scrollDown();



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
                    this.scrollDown();
                }, 2000)


            }
        },

        scrollDown() {
            const chat = document.getElementById('mainChat');
            chat.scrollHeight;


        }

    }
})