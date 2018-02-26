<template>
    <div id="app">
        <h1>Chatbot Explorer</h1>
        Currenty supports:
        <ul>
            <li>Find nearest branch</li>
            <li>Account balance enquiry</li>
            <li>Speak to someone</li>
        </ul>
        <el-button size="small" @click.native="clear()">Clear</el-button>
        <h4 v-for="message in messages">{{ message }}</h4>
        <el-input v-model="input" @keydown.enter.native="submit()"></el-input>
    </div>
<template>

<script>
var app = new Vue({
    el: '#app',
    data: {
        messages: [],
        input: ''
    },
    methods: {
        submit() {
            $.ajax({
                url: process.env.HOST + ':' + process.env.PORT + '/api/chatbot',
                data: {
                    text: this.input
                },
                dataType: "json",
                context: this,
                success: (data) => {
                    console.log('success', data);
                    this.messages.push('You: ' + this.input)
                    this.messages.push('Bot: ' + data.text);
                }
            }).done(() => { this.input = ""; })

        },
        clear() {
            this.messages = [];
        }
    },
    mounted() {
        // const socket = io.connect("https://localhost:3000/");
        // console.log('socket', socket);
    }
})
</script>

<style>
    
</style>