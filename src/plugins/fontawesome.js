import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faEnvelope,
    faLock,
    faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faEnvelope,
    faLock,
    faUser
    )

Vue.component("font-awesome-icon", FontAwesomeIcon)