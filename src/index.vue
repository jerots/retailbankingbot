<template>
  <div>
  <h1>HEu</h1>
  </div>
</template>
<script>

export default {
  data() {
    return {
      showSideBar: false,
      sidebarWidth: "200px"
    };
  },
  components: {
    SideNav,
    Login
  },
  computed: {
    ...mapGetters(["authenticated"])
  },
  methods: {
    toggleSidebar() {
      this.showSideBar = !this.showSideBar;
      if (window.innerWidth < 400) {
        if (this.showSideBar) {
          this.sidebarWidth = "0px";
        } else {
          this.sidebarWidth = "50px";
        }
      } else if (window.innerWidth < 867) {
        this.sidebarWidth = "50px";
      } else {
        this.sidebarWidth = "200px";
      }
    }
  },
  beforeMount() {
    this.$store.dispatch("FETCH_PROFILE");
    this.$store.commit("FETCH_ROLES");
  },
  mounted() {
    this.toggleSidebar();
    return this.$store.dispatch("FETCH_BOT");
  }
};
</script>


<style>
/** Mobile **/
@media only screen and (max-width: 867px),
  only screen and (max-device-width: 867px) {
  .el-main {
    padding: 0;
  }
}

#nav-icon {
  margin: 4px;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: white;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

/* Icon 3 */

#nav-icon span:nth-child(1) {
  top: 6px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 18px;
}

#nav-icon span:nth-child(4) {
  top: 32px;
}

#nav-icon.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.tooltip-button {
  /* background:red!important; */
  cursor: pointer;
  /* background:#E4392B; */
  /* color:white; */
  font-weight: 600;
}

.el-tabs__content {
  height: 85% !important;
  overflow: auto !important;
}
</style>
