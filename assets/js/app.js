
/* Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */

const app = new Vue({

    el: "#app",

    data: {
        src: "assets/img/",
        extention: ".jpg",
        activeContact: 0,
        activeMessage: 0,
        newMessage: '',

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [

                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],


            },

            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]

    },
    /* Milestone 2
    Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
    Click sul contatto mostra la conversazione del contatto cliccato */
    methods: {
        
         selectContact(index) {
            this.activeContact = index;

            console.log(this.activeContact);
        },
        /* Milestone 3
            Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
            “enter” il testo viene aggiunto al thread sopra, come messaggio verde */
        addMessage(activeContact, newMessage) {
            const d = new Date();
            const giorno_attuale = d.getDate() + "/" + parseInt(d.getMonth() + 1) + "/" + d.getFullYear();
            const ora_attuale = d.getHours() + ":" + d.getMinutes();

            console.log(giorno_attuale);
            console.log(ora_attuale);
            if (this.newMessage == "") {
                alert("devi inserire almeno un carattere")
            } else {

                console.log(this.newMessage);
                this.contacts[activeContact].messages.push(
                    {
                        date: giorno_attuale + " " + ora_attuale,
                        message: this.newMessage,
                        status: 'sent'
                    }
                )
                console.log(this.messages);

                this.newMessage = ''
            }

            setTimeout(reply => {
                this.contacts[activeContact].messages.push(
                    {
                        date: giorno_attuale + " " + ora_attuale,
                        message: 'OK!!',
                        status: 'received'
                    })

            }, 1000)

        },

        ricerca(activeContact) {
            let input = document.getElementById("search").value
            let elemento = this.contacts[activeContact].name;
            elemento.filter()


        },

        removeMessage(activeContact, index) {
            //console.log(this.contacts[index].messages)
            //console.log(index);
            let contatore = 0;  
            console.log(this.contacts[activeContact].messages.length);
            this.contacts[activeContact].messages.splice(index, contatore + 1)
            console.log(this.contacts[activeContact].messages);
        }

    }

})




/* Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde

Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo. */
