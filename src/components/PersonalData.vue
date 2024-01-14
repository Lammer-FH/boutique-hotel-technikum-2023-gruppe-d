<template>

     
      <tr>
        <th scope="row">First Name</th>
        <td class="text-left">{{ firstname }}</td>
      </tr>
      <tr>
        <th scope="row">Last Name</th>
        <td class="text-left">{{ lastname }}</td>
      </tr>
      <tr>
        <th scope="row">Email</th>
        <td class="text-left">{{ email }}</td>
      </tr>
      <tr>
        <th scope="row">Birthdate</th>
        <td class="text-left">{{ birthdate }}</td>
      </tr>
      <tr>
        <th scope="row">From Date</th>
        <td class="text-left">{{ fromDate }}</td>
      </tr>
      <tr>
        <th scope="row">To Date</th>
        <td class="text-left">{{ toDate }}</td>
      </tr>

     </template>
  
  <script>
  export default {
    props: {
      roomsName: String,
      firstname: String,
      lastname: String,
      email: String,
      birthdate: String,
      fromDate: String,
      toDate: String,
    },
  };
  </script>
  