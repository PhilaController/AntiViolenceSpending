import 'svg-classlist-polyfill'
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// load and set the HTML template we are using
let audit_content = $(".audit-content");
audit_content.html(require("@/template.html"));

new Vue({
  render: h => h(App)
}).$mount("#app");

// add help message
function add_help_message() {
  let helpMessage = `<p class='help-message'>
  Comments or feedback? Please contact
  <a href="mailto:controller.policy@phila.gov">controller.policy@phila.gov</a>.
  </p>`;
  $(".back-link").after(helpMessage);
}

// add a button to view the data set
function add_data_button() {
  const GID = "1jXjlhLaGTi1qBM7fRWAwmN70VSU6FK6m3gjm3mVpytk";
  let url = `https://docs.google.com/spreadsheets/d/${GID}`;

  // add a new button
  let btn = `<a href="${url}" target='_blank' class="btn btn-primary btn-block">
  <i class="fal fa-table"></i>
  View Complete Dataset
  </a>`;

  // add download data button
  $(".entry-header .btn").after(btn);
}


// the link to the dataset
add_data_button();

// add a help message
add_help_message();


