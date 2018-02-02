
new Vue({
    el: '#app',
    data: {
        pagination: {},
        selected: [],
        headers: [
            {
                text: 'Beers Name',
                align: 'left',
                sortable: false,
                value: 'name'
            },
            {text: 'Id', value: 'beer_id', align: 'left'},
            {text: 'Description', value: 'beer_description', align: 'left'}
        ],
        items: []
    },
    computed: {
        pages() {
            return this.pagination.rowsPerPage ? Math.ceil(50 / this.pagination.rowsPerPage) : 0
        }
    },
    mounted() {
        axios.get('https://api.brewerydb.com/v2/beers?styleId=1&key=85b0bfdcd6c896a617bed792d43253db&format=json')
            .then(response => {
                this.items = response.data.data;
                console.log(response.data.data);
            })

    }
});