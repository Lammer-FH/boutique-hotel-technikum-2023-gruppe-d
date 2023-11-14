import axios from 'axios';

export default (await import('vue')).defineComponent({
name: "RoomPage",
data() {
return {
rooms: [],
};
},
created() {
this.fetchRooms();
},
methods: {
async fetchRooms() {
try {
const response = await axios.get('https://boutique-hotel.helmuth-lammer.at/api/v1/rooms');
this.rooms = response.data;
} catch (error) {
console.error('Error fetching room data:', error);
}
},
getImg(roomId) {
return require(`@/assets/img/rooms/${roomId}.jpg`);
},
},
});
