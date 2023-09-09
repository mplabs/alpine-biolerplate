import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import '@fontsource/roboto'

import '../css/style.css'

Alpine.plugin(intersect)
window.Alpine = Alpine
Alpine.start()
