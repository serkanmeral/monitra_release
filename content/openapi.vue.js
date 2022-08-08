const openapi = {
    template: `
    <div class="about">
        <div id="swagger-ui"></div>
    </div>
    `,
    computed: {
        authstatus() {
            //  used to show/hide `content` link
            return this.$root.authstatus;
        },
    },
};
