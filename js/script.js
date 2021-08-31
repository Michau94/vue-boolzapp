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
        currentIndex: -1,
        lastSeen: 'Ultimo accesso:' + dayjs().format('DD/MM/YYYY - HH:mm:ss'),
        visible: null,
        searchMsg: '',


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

        // message obj create

        createMsgObj(message, status) {
            const msgTemp = {
                date: this.today.format('DD/MM/YYYY HH:mm:ss'),
                message: message,
                status: status,
            }

            return msgTemp;
        },

        // new message
        newMessage(ind) {

            let newMessage = this.createMsgObj(this.message, 'sent');

            // empty message control

            if (newMessage.message.trim() !== '' || newMessage.message.trim()) {
                this.lastSeen = 'Sta Scrivendo...'
                this.contacts[ind].messages.push(newMessage);
                this.message = "";
                this.sendReply(ind);

            }
        },

        // reply message
        sendReply(index) {

            setTimeout(() => {

                //possible responses
                let possibleReply = ['Ok', 'Non mi va ', 'Forse', 'Certamente'];
                let randomReply = '';
                let randomIndex = Math.floor(Math.random() * ((possibleReply.length - 1) + 1));


                //alla vecchia maniera per non dimenticare il for tradizionale
                for (let i = 0; i < possibleReply.length; i++) {
                    randomReply = possibleReply[randomIndex]
                }

                const replyMessage = this.createMsgObj(randomReply, 'received');

                this.contacts[index].messages.push(replyMessage);
                this.lastSeen = 'Ultimo accesso:' + dayjs().format('DD/MM/YYYY - HH:mm:ss')

            }, 3000)
        },


        deleteMessage(index) {
            return this.contacts[this.currentIndex].messages.splice(index, 1);
        },


        showLastMessage(contact) {
            let lastIndex = contact.messages.length - 1;
            const newMsg = contact.messages[lastIndex].message + " " + contact.messages[lastIndex].date;
            return newMsg;
        },

        // search message search bar toggle
        isVisible() {
            this.visible = !this.visible;
            return this.visible;
        },

        // search bar logic
        showMsg(message) {
            return message.toLowerCase().includes(this.searchMsg.toLowerCase())

        }


    },

    updated() {
        //scroll down on new message

        if (this.currentIndex >= 0) {
            const element = document.getElementById('mainChat');
            element.scrollTop = element.scrollHeight;
        }
    }
});