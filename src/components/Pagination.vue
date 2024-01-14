<template>
    <nav aria-label="Room Pagination" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" @click="goToPage(currentPage - 1)" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
          <a class="page-link" @click="goToPage(page)" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" @click="goToPage(currentPage + 1)" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: Number,
      totalPages: Number,
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.$emit("goToPage", page); 
        }
      },
    },
  };
  </script>
  