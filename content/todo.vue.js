const todo = {
    template: `
    <div class="todo">
        <h1>This is ToDo from content</h1>
    </div>
    `,
    computed: {
      authstatus() {
        //  used to show/hide `content` link
        return this.$root.authstatus;
      },
    },
  };
  