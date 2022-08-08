const about = {
    template: `
    <div class="about">
        <h1>This is about from content 12345678</h1>        
    </div>
    `,
    computed: {
      authstatus() {
        //  used to show/hide `content` link
        return this.$root.authstatus;
      },
    },
  };
  