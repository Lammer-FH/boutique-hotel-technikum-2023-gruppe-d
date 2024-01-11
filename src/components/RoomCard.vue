<template>
    <div class="card">
      <img :src="getImg(room.id)" style="max-width: 400px; height: auto; display: block; margin: 0 auto;">
      <div class="card-body">
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Room Number:</th>
              <td>{{ room.roomsNumber }}</td>
            </tr>
            <tr>
              <th scope="row">Room Name:</th>
              <td>{{ room.roomsName }}</td>
            </tr>
            <tr>
              <th scope="row">Number of Beds:</th>
              <td><i class="fas fa-bed"></i> {{ room.beds }} Bed</td>
            </tr>
            <tr>
              <th scope="row">Price per Night:</th>
              <td><i class="fas fa-euro-sign"></i> {{ room.pricePerNight }} $</td>
            </tr>
            <tr>
              <th scope="row">Extras:</th>
              <td>
                <div class="room-extras">
                  <template v-for="(extra, index) in getFormattedExtras(room.extras)" :key="index">
                    <span v-if="index > 0"> - </span>
                    <span>
                      {{ extra.name }}
                      <component :is="extra.icon"></component>
                    </span>
                  </template>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "RoomCard",
    props: {
      room: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImg(roomId) {
        return `/src/assets/img/rooms/${roomId}.jpg`;
      },
      getFormattedExtras(extras) {
        const extrasMapping = {
            livingroom: { name: 'Livingroom', icon: 'b-icon-lamp' },
        bathroom: { name: 'Bathroom', icon: 'b-icon-badge-wc' },
        minibar: { name: 'Minibar', icon: 'b-icon-cup-hot' },
        television: { name: 'Television', icon: 'b-icon-tv' },
        aircondition: { name: 'Air Condition', icon: 'b-icon-snow3' },
        wifi: { name: 'Wi-Fi', icon: 'b-icon-wifi-2' },
        breakfast: { name: 'Breakfast', icon: 'b-icon-egg-fried' },
        'handicapped accessible': { name: 'Handicapped Accessible', icon: 'b-icon-person-wheelchair' },
        };
        return extras.map(extra => {
          const extraName = Object.keys(extra)[0];
          const formattedExtra = extrasMapping[extraName] || { name: extraName, icon: null };
          return formattedExtra;
        });
      },
      
    }
  };
  </script>
  
  