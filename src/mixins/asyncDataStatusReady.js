export default {
    data() {
        return {
            asyncDataStatusReady: false
        }
    },
    methods: {
        asyncDataStatusChange() {
            return this.asyncDataStatusReady = true
        }
    }
}